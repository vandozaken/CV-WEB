with open("G:/PROJECT-AI/CV-WEB/css/style.css", "r", encoding="utf-8") as f:
    css = f.read()

# Let's inspect or update project card styles to remove nested card / badge feel
new_project_card_css = """
/* Projects Section Clean Editorial Polish */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.project-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  border-color: var(--text-muted);
}

.project-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 1px solid var(--border-color);
}

.project-content {
  padding: 1.75rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;
}

.project-desc {
  color: var(--text-muted);
  font-size: 0.925rem;
  margin-bottom: 1.25rem;
  flex: 1;
  line-height: 1.6;
}

.project-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
}

/* Minimalist tech text instead of card pills */
.project-tech {
  font-size: 0.825rem;
  font-family: var(--font-mono);
  color: var(--text-muted);
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-links a {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-main);
  text-decoration: underline;
  text-underline-offset: 4px;
  transition: color 0.2s ease;
}

.project-links a:hover {
  color: var(--accent);
}
"""

# Replace old project styles in css/style.css
# Let's write a python script to clean up and replace
