---
layout: post
title: "The Present of Data Science: perspectives and what we should learn from Tukey, Chambers, Cleveland, Breiman, and Donoho"
date: 2026-01-26
last-update: 2026-01-27
author: "Domingos de Eulária Dumba"
categories: general
cover: "2026/01/cover.png"
cover_credit: "Karola G of Pexels/Canva"
---


As I write this article, almost 25 years have passed since the first publication of "Data Science: An Action Plan for Expanding the Technical Areas of the Field of Statistics" by Bill Cleveland and already a decade since "50 Years of Data Science", by David Donoho. On the one hand, Cleveland was the first one to advocate explicitly for the need of a new field to push forward the capabilities of statistics towards more applied settings, rather than theoretical, which he named "Data Science". On the other, as Donoho pointed out, the seminal ideas to get into what we call now Data Science, actually emerged way before Cleveland's paper came out, as it was the core of Tukey's vision more than 60 years ago, mainly emphasized in "The Future of Data Analysis".

Donoho made an outstanding work on presenting the evolutionary arch of the field as well as the rationale and the individuals involved in it. To make it clearer, I will break down the topic I proposed in three parts, starting with the building blocks of Data Science, by borrowing and reflecting on the ideas of him and his peers.

### 1. Data Science: the building blocks
What first popped up in my head when I came across Donoho's article was "Oh, so Data Science was already a thing before Cleveland coined it!" or even before the 2012 Harvard Business Review (HBR) claim about it being the "Sexiest Job of the 21st Century". Until I came to the conclusion that it is worth a "Yes" and a "No".

It deserves a "Yes" in the sense that Cleveland, as a huge contributor to the field of statistics, working at Bell Labs, was truly aware of what he was proposing with this expansion: a continuation of Tukey's view rather than its rebranding. At this point, we may find consensus that Cleveland's motivations for such an initiative would have been better summarized by Chambers and Breiman, with the former stressing the emphasis on data preparation and presentation and the latter on predictive modeling.

Conversely, it might be worth a "No" if we think that the scope of a Data Analyst (the one that learns from data) differs from a pure statistician (theoretical emphasis) and therefore from a Data Scientist (the one mostly concerned with predictions, as a result of the six spheres of expansion presented by Cleveland). If we perceive statistics as the foundation for Data Scientists to better tackle the problems they are expected to solve, we might at this point be inaugurating a more fruitful debate (if it is even one) instead of looking at them as rebranded Statisticians.

My attempt to make even more explicit the relationship and relevance of these two fields might be much more digestible if I take François Chollet's words on the difference between ML and Statistics: "Machine learning is related to mathematical statistics, but it differs from statistics in several important ways, in the same sense that medicine is related to chemistry but cannot be reduced to chemistry as medicine deals with its own distinct systems with their own distinct properties." Could we portray this same picture to support how Data Science is as needed as Statistics?

Despite this attempt, it is also worth mentioning that this separation of concerns has mostly resulted in what we may call the data and infrastructure tension.


### 2. Existential Crisis: the data and infrastructure dichotomy
I started my journey as a Data Analyst through the IBM Specialization, after a career transition from Industrial Engineering. But I then found Machine Learning much more interesting, and made the decision to push my skills toward what's expected of a Data Scientist (so that my first position in the field was related to NLP). I have experienced the massive emphasis on computing pointed out by Donoho during the Data Analyst Specialization. The program is worth it, but that does not make you good at learning from data from a statistics standpoint as you build your computing expertise along the way (unless you are highly curious and willing to look for more as I eventually decided to do). Looking back at what I have experienced myself, maybe if I was a statistician, as David is, I would feel that somehow there's an attempt to ostracize statistics from the data ecosystem. But I am mostly sure that is not the case.

As a result, today I find myself reading lots of Statistics and Machine Learning material, from Causal Inference (the mixtape, by Scott Cunningham) to Doing Bayesian Data Analysis (by John Kruschke), to name a few. My understanding is that, no matter the profession, everything we do should revolve around its foundations (the why), so we do not fall into the trap of having computing as a coping mechanism but a tool to amplify our data capabilities just like it was initially proposed by Cleveland. For instance, if you use algorithms based on Bayes' theorem for classification problems it should be mandatory to learn how to build these same classifiers from scratch. 

The motto here is effort and time allocation, as David also stated: if you somehow spend 80% of the time (I made up this number) dealing with infrastructure or computing related problems instead of working on data, it should be reasonable to question whether you are a Data Scientist or a Developer.


### 3. Machine Learning Engineering: a new direction
The plot below illustrates the Google Trends for web searches of the words "Machine Learning Engineer", "Data Scientist", and "Statistician" from 1/1/2012 through 1/25/2026.

{% include google-trends-26.01.html 
   config='{"comparisonItem":[{"keyword":"machine learning engineer","geo":"","time":"2012-01-01 2026-01-25"},{"keyword":"Data Scientist","geo":"","time":"2012-01-01 2026-01-25"},{"keyword":"statistician","geo":"","time":"2012-01-01 2026-01-25"}],"category":0,"property":""}'
   options='{"exploreQuery":"date=2012-01-01%202026-01-25&q=machine%20learning%20engineer,Data%20Scientist,statistician&hl=en-US","guestPath":"https://trends.google.com:443/trends/embed/"}'
%}
Credit: Google Trends
<br>

The reason for including Machine Learning Engineering: we undeniably have now a new debate. 10 years later, the HBR revisited their 2012 article questioning whether the statement about Data Science being the "Sexiest Job of the 21st Century" was still valid.

Pure Data Scientists might now share the same feeling about Machine Learning Engineering just like pure Statisticians did with Data Science when it was emerging (mostly during the 2010s). The cycle repeats itself.

There might not exist a Tukey or a Cleveland now to advocate for a new direction. But we may all agree that it is an invitation to enlarge the frontiers of the field of Data Science... and again, inherently, of Statistics.


## References
<a href="https://doi.org/10.1214/ss/1009213726">Breiman, L. (2001). Statistical Modeling: The Two Cultures. Statistical Science, 16(3), 199-231.</a>

<a href="https://doi.org/10.1007/BF00141776"> Chambers, J. M. (1993). Greater or Lesser Statistics: A Choice for Future Research. Statistics and Computing, 3, 182-184.</a>

<a href="https://www.manning.com/books/deep-learning-with-python-second-edition"> Chollet, F. (2021). Deep Learning with Python (2nd ed.). Manning Publications.</a>

<a href="https://www.jstor.org/stable/1403527"> Data Science: An Action Plan for Expanding the Technical Areas of the Field of Statistics.</a>

<a href="https://hbr.org/2012/10/data-scientist-the-sexiest-job-of-the-21st-century"> Davenport, T. H. & Patil, D. J. (2012). Data Scientist: The Sexiest Job of the 21st Century. Harvard Business Review, October.</a>

<a href="https://hbr.org/2022/07/is-data-scientist-still-the-sexiest-job-of-the-21st-century"> Davenport, T. H. & Patil, D. J. (2022). Is Data Scientist Still the Sexiest Job of the 21st Century?. Harvard Business Review, July-August.</a>

<a href="https://courses.csail.mit.edu/18.337/2015/docs/50YearsDataScience.pdf"> Donoho, D. (2017). 50 Years of Data Science. Journal of Computational and Graphical Statistics, 26(4), 745-766.</a>

<a href="https://doi.org/10.1214/aoms/1177704711"> Tukey, J. W. (1962). The Future of Data Analysis. Annals of Mathematical Statistics, 33(1), 1-67.</a>