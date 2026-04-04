---
layout: post
title: "A Practical Dive Into the Mechanics of the Gaussian PDF"
date: 2026-03-26
last_update: 2026-04-03
author: "Domingos de Eulária Dumba"
categories: general
cover: "2026/03/cover.png"
cover_credit: "benjaminec/Getty Images"
---



If you have invested considerable time in Statistics, you have inevitably relied on Gaussian Probability Density Function (whether for A/B testing or any broader inferential tasks). 

But have you ever taken the time to think about how we arrived at that expression? 

This article walks through the mathematical foundation of the Normal PDF, starting with the events that not only ignited it but its evolution in modern application of statistics.


<br>
### 1. The Discovery of Ceres
![Ceres](/assets/blog/2026/03/ceres.jpg)
Ceres Image Capture (Credit: NASA)

On January 1, 1801, what was then announced as the new planet Ceres (later classified as the first asteroid and now a dwarf planet) was discovered by Giuseppe Piazzi at the Palermo Astronomical Observatory, in Sicily. This discovery occurred before Piazzi was invited to join the "Celestial Police" (a group of twenty-four elite astronomers tasked with finding a suspected "missing" planet between Mars and Jupiter). While their collective efforts led to several other astronomical breakthroughs, the predicted planet itself remained elusive.


Piazzi initially mistook Ceres for a comet while searching for the 87th star in the catalog of the French astronomer Abbé de Lacaille. He tracked the object twenty-four times before his final sighting on February 11th. By the time his observations were published, in September of that year, Piazzi had become convinced that its slow, uniform movement suggested something far more significant than a mere comet.

As he wrote to his contemporary, the astronomer Barnaba Oriani: "I have presented this star as a comet, but owing to its lack of nebulosity, and to its motion being too slow rather than uniform, I feel in the heart that it could be something better than a comet, perhaps. [...]". 

A major problem had emerged though: by then, Ceres' position had changed so much that it was lost in the glare of the sun. As it re-emerged, other astronomers found it nearly impossible to relocate the object based on Piazzi's limited data. That is, until a young German mathematician named Carl Friedrich Gauss decided to get involved.


<br>
### 2. Gauss and the Recovery of the Lost Planet
On December 7, 1801, Ceres was finally recovered. The German astronomer Franz Xaver von Zach was the first to catch a glimpse of it, and by December 31, he had confirmed its planetary nature thanks to the method developed by the then twenty-four-year-old German prodigy. Gauss tackled the problem of few and highly imprecise observations by synthesizing two revolutionary ideas: Maximum Likelihood and Best Estimation.


##### a) The Maximum Likelihood Estimation
Let $$M_1,\quad M_2,\quad M_3,\quad \ldots,\quad M_n$$ be several independent observations of Ceres. Let also $$x$$ be the actual or "true value" of Ceres' position. The errors of these observations can be expressed as:
<div align="center"> 
$$\Delta_1 = (M_1 - x), \quad\Delta_2 = (M_2 - x), \quad \ldots, \quad \Delta_n = (M_n - x)$$
</div>

Gauss defines a probability density function, $$L,$$ that describes how likely any error of measurement is as $$\Phi(\Delta_i)$$. To find the total probability of seeing this specific set of observations, we take the product of their individual probabilities (recalling from probability theory that  $$P(A_1 \cap A_2 \cap \ldots \cap A_n) = P(A_1) \cdot P(A_2) \cdot \ldots \cdot P(A_n)$$, for $$n$$ independent events):
<div align="center">
$$L = \prod_{i=1}^{n} \Phi(\Delta_i) \quad [1]$$
</div>

Since it is mathematically simpler to work with sums than products, we transform the Likelihood Function into a Log-Likelihood Function:
<div align="center">
$$LL = \sum_{i=1}^{n} \ln [\Phi(\Delta_i)]$$
</div>

Now, a crucial question arises: which value of $$x$$ maximizes this joint probability to give us the most accurate estimation of Ceres' position? In calculus, this is solved by finding where the derivative equals zero:
<div align="center">
$$\frac{d}{dx} LL = 0$$
</div>

This equation defines the Maximum Likelihood Estimation (MLE). By applying the chain rule, we can simplify this expression:
<div align="center">
$$\frac{d}{dx} LL = \frac{d}{d\Phi} LL \cdot \frac{d}{d\Delta} \Phi \cdot \frac{d}{dx} \Delta = 0$$
$$\frac{d}{dx} LL = \sum_{i=1}^{n} \frac{1}{\Phi(\Delta_i)} \cdot \frac{d}{d\Delta} \Phi \cdot (-1) = 0$$
$$\frac{d}{dx} LL = \sum_{i=1}^{n} \frac{1}{\Phi(\Delta_i)} \cdot \frac{d}{d\Delta} \Phi = 0 \quad [2]$$
</div>


##### b) The Axiom of the Mean
For any set of observations, Gauss postulates that the arithmetic mean is the most natural candidate for the "true" value. In his own words: "[...] if any quantity has been determined by several direct observations, made under the same circumstances and with equal care, the arithmetical mean of the observed values affords the most probable value, if not rigorously, yet very nearly at least, so that it is always most safe to adhere to it".

Mathematically, this "Axiom of the Mean" identifies the best estimate $$x$$ as:
<div align="right">
$$x = \frac{1}{n} \cdot \sum_{i=1}^{n} M_i$$
</div>

This assumption carries a powerful implication. If $$x$$ is the average of all $$M_i$$, then the sum of the individual deviations must logically nullify itself:
<div align="center">
$$\sum_{i=1}^{n} \Delta_i = 0 \quad [3]$$
</div>


#### 2.1 Solving the Functional Equation
Gauss then compares equations [2] and [3]. For both conditions  to hold simultaneously for any set of observations, the ratio of the two terms must be a "constant quantity", which we will call $$k$$:
<div align="center">
$$\frac{1}{\Phi(\Delta)} \cdot \frac{d}{d\Delta} \Phi \cdot \frac{1}{\Delta} = k$$
</div>

Which results in:
<div align="center">
$$\frac{1}{\Phi(\Delta)} \cdot \frac{d}{d\Delta} \Phi = k \Delta$$
$$\frac{d}{\Phi(\Delta)} \Phi = k \Delta {d\Delta}$$
</div>

By separating the variables and integrating both sides:
<div align="center">
$$\int\frac{d}{\Phi(\Delta)} \Phi = k\int\Delta {d\Delta}$$
$$\ln\Phi(\Delta) = \frac{k}{2} \Delta^2 + c$$
$$\Phi(\Delta) = \exp\Big(\frac{k}{2} \Delta^2 + c\Big)$$
$$\Phi(\Delta) = \exp(c) \cdot \exp\Big(\frac{k}{2} \Delta^2\Big) \quad [4]$$
</div>

Recall that $$\Phi(\Delta)$$ represents the likelihood of an individual measurement. Thus, from [4] we can infer that the maximum probability is such that the squared errors are minimized. Let $$\exp(c) = A$$ and $$\frac{1}{2} k = -h^2$$, where $$h$$ is what Gauss termed the "measure of precision" (here, the constant $$k$$ is set to negative since the likelihood of the observations, $$\Phi(\Delta)$$, must decay for large errors). And given that the total probability must sum to 1, we solve for $$A$$:
<div align="center">
$$1 = A \int_{-\infty}^{+\infty} e^{-(h\Delta)^2} d\Delta$$
</div>

Switching to polar coordinates, and "[...] by the elegant theorem first discovered by Laplace [...]", we have that:
<div align="center">
 $$\int_{-\infty}^{+\infty} e^{-x^2} dx = \sqrt{\pi}\, {}^{\,*}$$
</div>

<details markdown="1" style="color: #548494">
<summary style="color: #548494; font-style: italic; font-size: 14px;">* Expand to see the full demonstration</summary>
Since $$x$$ is a dummy variable, the key to evaluating this integral is to consider its square (why? Because $$e^{-x^2}$$ has no elementary antiderivative; that is, direct integration is impossible). This allows us to treat the product of two independent integrals as a single double integral over the Cartesian plane:
<div align="center">
$$I^2 = \Big(\int_{-\infty}^{+\infty} e^{-x^2} dx \Big) \Big(\int_{-\infty}^{+\infty} e^{-y^2} dy \Big)$$
$$I^2 = \int\int_{\mathbb{R}} e^{-(x^2 + y^2)} dxdy$$
</div>

To solve this, we transform the integral into polar coordinates, where $$x^2 + y^2 = r^2$$ and the differential area element $$dx dy$$ becomes $$r dr d\theta$$. The limits of integration then change from the entire $$xy$$-plane to $$r \in [0, \infty)$$ and $$\theta \in [0, 2\pi)$$:
<div align="center">
$$I^2 = \int_{0}^{2\pi}\int_{0}^{\infty} re^{-r^2} dr d\theta$$
</div>

Since the integrand does not depend on $$\theta$$, we can separate the integrals:
<div align="center">
$$I^2 = \Big(\int_{0}^{2\pi}d\theta \Big) \Big(\int_{0}^{\infty} re^{-r^2} dr \Big)$$
</div>

Let us denote $$I_\theta$$ as the integral dependent on $$\theta$$ and $$I_r$$ its radial counterpart:
<div align="center">
$$I^2 = I_\theta \cdot I_r$$
</div>

The result of the angular component, $$I_\theta$$, is straightforward:
<div align="center">
$$I^2 = 2\pi \cdot I_r$$
</div>

For $$I_r$$ we use $$u$$-substitution. Let $$u = -r^2 \implies -\frac{1}{2}du = rdr$$, which implies:
<div align="center">
$$I^2 = 2\pi \cdot -\frac{1}{2}\int_{0}^{-\infty}e^udu$$
$$I^2 = -\pi \cdot (e^{-\infty} - 1)$$
$$I^2 = \pi \implies I = \sqrt{\pi}$$
</div>
<br>
</details>

Therefore, this results in:
<div align="center">
$$1 = A \cdot \frac{\sqrt{\pi}}{h}$$
</div>

We can now write equation [4] in terms of $$h$$ as originally written in Theoria Motus as:
<div align="center">
$$\Phi(\Delta) = \frac{h}{\sqrt{\pi}} \cdot e^{-hh\Delta\Delta}$$
</div>

Substituting this back into our Likelihood Function (Equation [1]), we arrive at the total Likelihood:
<div align="center">
$$L = \Big(\frac{h}{\sqrt{\pi}}\Big)^n \cdot e^{-h^2 \sum_{i=1}^{n} \Delta_i^2}$$ 
</div>

This result cemented the Method of Ordinary Least Squares (OLS). It proved mathematically that maximizing the likelihood of the observations is equivalent to minimizing the sum of squared errors.

The presented framework was robust enough to recover Ceres from the void. However, its true potential was only beginning to be realized; the Gaussian PDF would soon move from the stars to nearly every field of human inquiry.


<br>
### 3. Beyond the Stars: a new perspective on Precision
Over a decade later, Gauss revisited and refined his ideas from Theoria Motus, solidifying the OLS method in his 1823 work, Theoria Combinationis. The most remarkable shift in this later work was his formal derivation of the "mean error", $$m$$.
Gauss realized that "[...] taken from $$x = -\infty$$ to $$x = +\infty$$ (the mean square of $$x$$) seems most appropriate to generally define and quantify the uncertainty of the observations. Thus, given two systems of observations which differ in their likelihoods, we will say that the one for which the integral $$\int xx\varphi(x)dx$$ is smaller is the more precise" (Note: He here used $$x$$ and $$\varphi(x)$$ to denote the error and its probability, which we have referred to as $$\Delta$$ and $$\Phi(\Delta)$$ throughout this article, respectively).

Additionally, this work allowed him to move beyond his earlier "Axiom of the Mean". In Theoria Motus, he had assumed the arithmetic mean was the most probable value to justify the distribution; in Theoria Combinationis, he proved it. He demonstrated that the mean is the Best Linear Unbiased Estimator (BLUE). This was a massive leap as he showed that regardless of the underlying distribution of the errors, the mean remains the mathematically superior choice for minimizing variance.


#### 3.1 Deriving the Mean Square Error
We begin by expressing the mean square of the error as the expected value of $$\Delta^2$$:
<div align="center">
$$m^2 = \int_{-\infty}^{+\infty}\Delta^2\Phi(\Delta)d\Delta$$
</div>

Substituting $$\Phi(\Delta)$$ from our previously derived function, we obtain:
<div align="center">
$$m^2 = \frac{h}{\sqrt{\pi}}\int_{-\infty}^{+\infty}\Delta^2 e^{-h^2\Delta^2} d\Delta$$
</div>

We solve this using integration by parts ($$\int udv = uv - \int vdu$$). Let:
* $$u = \Delta \implies du = d\Delta$$.
* $$dv = \Delta e^{-h^2\Delta^2}d\Delta \implies v = \int\Delta e^{-h^2\Delta^2}d\Delta$$. 

Before moving to the integration by parts, let us first find the solution for $$v$$ by setting  $$w = -h^2\Delta^2$$, which implies:
<div align="center">
$$dw = -2h^2\Delta d\Delta \implies -\frac{1}{2h^2}dw = \Delta d\Delta$$
$$v = -\frac{1}{2h^2} \int e^wdw$$
$$v = -\frac{1}{2h^2} \cdot e^{-h^2\Delta^2}$$
</div>

Plugging these in, the mean square error becomes:
<div align="center">
$$m^2 = \frac{h}{\sqrt\pi} \Big(\Delta \cdot -\frac{1}{2h^2} e^{-h^2\Delta^2}\Big|_{-\infty}^{+\infty} - \int_{-\infty}^{+\infty} -\frac{1}{2h^2} \cdot e^{-h^2\Delta^2} d\Delta \Big)$$
</div>

The first term of $$m^2$$ vanishes as, for $$\pm \infty$$,  $$\Delta$$ becomes a factor of $$e^{-\infty}$$. This leaves us with:
<div align="center">
$$m^2 = \frac{1}{2h\sqrt\pi} \int_{-\infty}^{+\infty} e^{-h^2\Delta^2} d\Delta$$
$$m^2 = \frac{1}{2h\sqrt\pi} \cdot \frac{\sqrt \pi}{h}$$
$$m^2 = \frac{1}{2h^2}$$
$$m = \frac{1}{h\sqrt{2}}$$
</div>


#### 3.2 From Measure of Precision to Standard Deviation
We can now rewrite our error function in Equation [4] in terms of $$m$$:
<div align="center">
$$\Phi(\Delta) = \frac{1}{m\sqrt{2\pi}} \cdot e^{- \frac{1}{2m^2}\Delta^2}$$
</div>

This formulation was a game-changer, allowing the method to transcend its astronomical roots. A closer look at this mathematical sequence reveals that what Gauss termed the "mean error," $$m$$, is precisely what we recognize today as the Standard Deviation.

The term Standard Deviation was famously coined by Karl Pearson in 1893, who, building on the work of Francis Galton, Walter Weldon, and others, extended Gauss's contributions into the biological sciences. Hence, by expressing the error $$\Delta$$ as $$(x - \mu)$$, where $$\mu$$ is the arithmetic mean and $$x$$ represents the individual observations, and substituting Pearson’s $$\sigma$$ for $$m$$, we arrive at the modern Normal Distribution Probability Density Function:
<div align="center">
$$g(x) = \frac{1}{\sigma\sqrt{2\pi}} \cdot e^{- \frac{1}{2}\Big(\frac{x - \mu}{\sigma}\Big)^2}$$
</div>

And this is the exact expression used today to model an array of phenomena, from the natural sciences to marketing analytics and modern Machine Learning applications like Gaussian Naive Bayes. What once began as a mathematical device to recover Ceres has become one of the most fundamental tools for understanding and quantifying uncertainty.


<br> <br>
## References
<a href="https://astro.uni-bonn.de/~pbrosche/aa/acta/vol14/brosche.html">Brosche, P. (2002). Die Wiederauffindung der Ceres im Jahre 1801 [The rediscovery of Ceres in 1801]. In W. R. Dick & J. Hamel (Eds.), Astronomie von Olbers bis Schwarzschild (Acta Historica Astronomiae, Vol. 14, pp. 80–88). Harri Deutsch. Last access on March 18, 2026.</a>

<a href="https://archive.org/details/theoryofmotionof00gausuoft">Gauss, C. F. (1809). Theoria motus corporum coelestium in sectionibus conicis solem ambientium. (English trans. by C. H. Davis, Theory of the Motion of the Heavenly Bodies Moving in Conic Sections around the Sun, Boston: Little, Brown and Company, 1857). Last access on March 02, 2026.</a>

<a href="https://www.scribd.com/document/535587387/1995-THEORY-OF-THE-COMBINATION-OF-OBSERVATIONS-LEAST-SUBJECT-TO-ERRORS-G-W-Stewart">Gauss, C. F. (1995). Theory of the Combination of Observations Least Subject to Errors: Part One, Part Two, Supplement. (G. W. Stewart, Trans.). Society for Industrial and Applied Mathematics. Last access on March 09, 2026.</a>


<a href="https://web.archive.org/web/20071116022100/http://www.astropa.unipa.it/HISTORY/hoskin.html">Hoskin, M. (1993). Bode's Law and the Discovery of Ceres. In J.F. Linsky & S. Serio (Eds.), Physics of Solar and Stellar Coronae: G.S. Vaiana Memorial Symposium (Astrophysics and Space Science Library, vol. 183, pp. 21–33). Kluwer. Last access on March 11, 2026.</a>

<a href="https://www.jpl.nasa.gov/news/ceres-keeping-well-guarded-secrets-for-215-years">NASA Jet Propulsion Laboratory. (2016). Ceres: Keeping Well-Guarded Secrets for 215 Years. Last access on February 28, 2026</a>

<a href="https://projecteuclid.org/euclid.ojm/1200686035">Ogawa, J. (1950). Note on the Markoff's Theorem on Least Squares. Osaka Mathematical Journal, 2(2), 175–186. Last access on April 02, 2026.</a>

<a href="https://royalsocietypublishing.org/doi/10.1098/rsta.1894.0003">Pearson, K. (1893). Contributions to the Mathematical Theory of Evolution. Philosophical Transactions of the Royal Society of London, 185, 71–110. Last access on March 22, 2026.</a>

<a href="https://archive.org/details/studiesinhistory00walk">Walker, H. M. (1929). Studies in the History of Statistical Method: With Special Reference to Certain Educational Problems. Williams & Wilkins Co. Last access on April 02, 2026.</a>