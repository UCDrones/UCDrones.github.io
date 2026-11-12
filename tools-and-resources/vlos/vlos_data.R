# Export the corrected trial workbook to one tidy CSV for the website.
#
# Run from the project root whenever the workbook changes:
#   Rscript data/prep_vlos_data.R
#
# This script does no analysis. It only reshapes: one row per observation,
# with drone, trial and observer taken from the sheet name. All angles come
# from the VLOS_AM values already computed in the workbook.

library(readxl)
library(dplyr)
library(purrr)
library(here)

xlsx <- here("tools-and-resources", "vlos", "data", "AllDroneTrialsActual-2026-fixed.xlsx")
out  <- here("tools-and-resources", "vlos", "data", "vlos_observations.csv")

sheets <- setdiff(excel_sheets(xlsx), "Metadata")

read_trial <- function(sheet) {
  parts <- strsplit(sheet, "-", fixed = TRUE)[[1]]   # e.g. "Mini", "Trial2", "UI4"
  stopifnot(length(parts) == 3)
  
  read_excel(xlsx, sheet = sheet) |>
    select(Visible, Lat_Dist, Lat_Alt, VLOS_AM) |>   # Time is dropped: its type differs between sheets
    filter(!is.na(VLOS_AM)) |>                        # guards against empty rows at the bottom of a sheet
    mutate(
      drone    = parts[1],
      trial    = as.integer(sub("Trial", "", parts[2])),
      observer = parts[3],
      sheet    = sheet,
      row      = row_number(),                        # keeps order within a sheet, for loss/regain events
      visible  = as.logical(Visible),
      .before  = 1
    ) |>
    select(drone, trial, observer, sheet, row, visible,
           dist_ft = Lat_Dist, alt_ft = Lat_Alt, arcmin = VLOS_AM)
}

obs <- map(sheets, read_trial) |> bind_rows()

# Quick checks: printed so a bad export is obvious before it reaches the site.
stopifnot(!anyNA(obs$visible), !anyNA(obs$arcmin), all(obs$arcmin > 0))
print(count(obs, drone, name = "rows"))
message(nrow(obs), " rows from ", length(sheets), " sheets")

write.csv(obs, out, row.names = FALSE)
message("Wrote ", out)