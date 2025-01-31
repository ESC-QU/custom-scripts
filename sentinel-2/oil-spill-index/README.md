#OSI-Oil-Spill-Index

<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
      {% include_relative script.js %}
{% endhighlight %}
</div>

## Evaluate and visualize
 - [Sentinel Playground](https://apps.sentinel-hub.com/sentinel-playground/?source=S2L2A&lat=-20.43437229834543&lng=57.740750312805176&zoom=14&preset=CUSTOM&layers=B01,B02,B03&maxcc=20&gain=1.0&gamma=1.7&time=2020-02-01%7C2020-08-06&atmFilter=&showDates=false&evalscript=bGV0IE9TSSA9IChCMDMgKyBCMDQpIC8gQjAyOwoKcmV0dXJuIFtPU0kvM10%3D){:target="_blank"}    
 - [EO Browser](https://sentinelshare.page.link/2vSe){:target="_blank"} 

##General description of the script

The OSI is an Oil spill Index uses visible bands of Sentinel-2 to display spilled oil over water in the costal/marine environment. The OSI is constructed by summing-up the bands representing the shoulders of absorption features of oil as numerator and the band located nearest to the absorption feature as denominator to discriminate oil spill as below.

**OSI = (B03 + B04) / B02**


#Author of the script

**Sankaran Rajendran**


#Description of representative images


‘Sentinele-2 Images developed using oil spill index (OSI) with other indices showing the occurrence and distribution of oil spill occurred off Mauritius located in the Indian ocean on August 06, 2020 (images acquired a. before (17 July, 2020), b. and c. during (01 and 06 August, 2020) and c. after (05 September, 2020) the oil spill). The results can be compared with the images of decorrelated the spectral bands 4, 3 and 2 given below (Rajendran et al., 2021b, c)’.

a. (R: (5+6)/7; G: (3+4)/2; B: (11+12)/8) 
![Sentinele-2 Image using OSI](images/1.jpg)

b. R: 3/2; G: (3+4)/2; B: (6+7)/5
![Sentinele-2 Image using OSI](images/2.jpg)

Decorrelated images of spectral bands 4, 3 and 2 of Sentinel-2 showing the occurrence and spatial distribution of oil spill (images acquired a. before (17 July, 2020), b. and c. during (01 and 06 August, 2020) and c. after (05 September, 2020) the oil spill).
![Sentinele-2 Image using OSI](images/3.jpg)

##References
1.	Rajendran, S, Sadooni, F.N, Hamad Al Saad, Anisimov Oleg, Govil, H., Nasir, S, Vethamony, P., 2021. Monitoring Oil Spill in Norilsk, Russia using satellite data. Scientific Reports. 11, 3817.

2.	Rajendran. S, Vethamony. P, Sadooni F.N, Hamad Al Saad, Jassim A. Al-Khayat, Govil. H, Nasir. S. 2021. Sentinel-2 image transformation methods for mapping oil spill - A case study with Wakashio oil spill in the Indian Ocean, off Mauritius. MethodsX 101327.

3.	Rajendran. S, Vethamony. P, Sadooni F.N, Hamad Al Saad, Jassim A. Al-Khayat, Vashist O Seegobin, Govil. H, Nasir. S. 2021. Detection of Wakashio oil spill off Mauritius using Sentinel-1 and 2 data: Capability of sensors, image transformation methods and mapping. Environmental Pollution. 274, 116618.
