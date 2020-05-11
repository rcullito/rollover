
;; cond for each case

;; already staged
;; unstaged
;; nothing 


;; so if we run this first, we should be fairly safe to run the second condition
((not (magit-anything-unstaged-p))
 (user-error "Nothing staged (or unstaged)"))


(when (y-or-n-p "Nothing staged.  Stage and commit all unstaged changes? ")
  (magit-run-git "add" "-u" "."))



(defun quick-commit ()
  (let (commit-message (read-string (message "Enter your commit message: ")))
    (when (magit-git-success "commit" "-m" commit-message)
      (progn (message "commmited!")
             (magit-refresh-buffer)))))



;; first just search out the world, do the cond and if on success prompt for a commit message

(defun explore-the-world ()
  (cond
   ;; if there are staged changes, assume that anything unstage is intended and
   ;; just get on with things
   ((magit-anything-staged-p)
    (quick-commit))
    ;; if there are unstaged changes, shall we add them?
   ((magit-anything-unstaged-p)
    (when (y-or-n-p "Stage and commit all unstaged changes? ")
      (magit-run-git "add" "-u" ".")))
    ;; if ther are no staged or unstaged changes, let the user
    ;; know they haven't done that much ;)
   (t
    (user-error "Nothing staged"))))


(defun quick-commit (commit-message)
  (interactive "sEnter your commit message: ")
  (cond 
   ((magit-anything-unstaged-p)
    (when (y-or-n-p "Stage and commit all unstaged changes? ")
      (progn (magit-run-git "add" "-u" ".")
             (quick-commit commit-message))))
   ((magit-anything-staged-p)
    (when (magit-git-success "commit" "-m" commit-message)
      (progn (message "commmited!")
             (magit-refresh-buffer))))
   (t
    (user-error "Nothing staged"))))
