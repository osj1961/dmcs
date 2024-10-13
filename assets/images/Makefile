svgs := $(patsubst %.fig,%.svg,$(wildcard *.fig)) 
pdfs := $(patsubst %.fig,%.pdf,$(wildcard *.fig)) 
pngs := $(patsubst %.fig,%.png,$(wildcard *.fig))


all: $(svgs) $(pdfs) $(pngs)
	

%.svg : %.fig
	fig2dev -L svg $< > $@

%.pdf : %.fig
	fig2dev -L pdf $< > $@

%.png : %.fig
	fig2dev -L png $< > $@

clean :
	rm *.pdf *.png *.svg