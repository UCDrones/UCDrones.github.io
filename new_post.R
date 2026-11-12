# new_post.R
# Open this file in RStudio and click "Source" (or Ctrl/Cmd + Shift + S).
# It asks for a title, then creates posts/YYYY-MM-DD-slug/index.qmd and opens it.

(function() {
  has_rstudio <- requireNamespace("rstudioapi", quietly = TRUE) &&
    rstudioapi::isAvailable()
  
  # Project root: the open RStudio project, otherwise the working directory
  root <- if (has_rstudio && !is.null(rstudioapi::getActiveProject())) {
    rstudioapi::getActiveProject()
  } else {
    getwd()
  }
  posts_dir <- file.path(root, "posts")
  
  ask <- function(label, default = "") {
    if (has_rstudio) {
      rstudioapi::showPrompt("New post", label, default)  # NULL if cancelled
    } else {
      ans <- readline(sprintf("%s [%s]: ", label, default))
      if (ans == "") default else ans
    }
  }
  
  slugify <- function(x, max_words = 5) {
    x <- iconv(x, to = "ASCII//TRANSLIT", sub = "")  # é -> e
    x <- tolower(gsub("['`^~\"]", "", x))           # drop transliteration leftovers
    words <- strsplit(gsub("[^a-z0-9]+", " ", x), " ")[[1]]
    words <- words[words != ""]
    paste(head(words, max_words), collapse = "-")
  }
  
  title <- ask("Post title:")
  if (is.null(title) || trimws(title) == "") {
    message("Cancelled.")
    return(invisible(NULL))
  }
  title <- trimws(title)
  
  slug <- ask("Slug (edit if you like):", slugify(title))
  if (is.null(slug)) {
    message("Cancelled.")
    return(invisible(NULL))
  }
  slug <- slugify(slug, max_words = Inf)
  if (slug == "") stop("Slug is empty. Try again with a different slug.")
  
  date <- ask("Date (YYYY-MM-DD):", format(Sys.Date()))
  if (is.null(date)) {
    message("Cancelled.")
    return(invisible(NULL))
  }
  if (!grepl("^\\d{4}-\\d{2}-\\d{2}$", date) ||
      is.na(as.Date(date, format = "%Y-%m-%d"))) {
    stop("Invalid date '", date, "'. Use YYYY-MM-DD.")
  }
  
  post_dir <- file.path(posts_dir, paste0(date, "-", slug))
  if (dir.exists(post_dir)) stop("Already exists: ", post_dir)
  dir.create(post_dir, recursive = TRUE)
  
  safe_title <- gsub('"', '\\\\"', title)
  lines <- c(
    "---",
    sprintf('title: "%s"', safe_title),
    sprintf('date: "%s"', date),
    'description: ""',
    "categories: []",
    "# image: thumbnail.jpg",
    "draft: true",
    "---",
    "",
    "Write your post here.",
    "",
    "[\u2190 Back to Recent News](../../recent-news.qmd)"
  )
  
  post_file <- file.path(post_dir, "index.qmd")
  con <- file(post_file, open = "w", encoding = "UTF-8")
  writeLines(lines, con)
  close(con)
  
  message("Created ", post_file)
  if (has_rstudio) rstudioapi::navigateToFile(post_file)
  invisible(post_file)
})()