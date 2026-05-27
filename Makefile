.PHONY: install build serve serve-prod clean

install:
	bundle install

build:
	bundle exec jekyll build

serve:
	bundle exec jekyll serve --livereload --drafts

serve-prod:
	bundle exec jekyll serve --livereload

clean:
	bundle exec jekyll clean
