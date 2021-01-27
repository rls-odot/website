(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{264:function(e,t,o){"use strict";o.r(t);var a=o(6),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h2",{attrs:{id:"introduction"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),o("p",[e._v("Logistic regression, or as they are often referred to in travel forecasting, logit models are one of the fundamental and most widely used methods in modeling and forecasting travel behavior and patterns.")]),e._v(" "),o("p",[e._v("Logit models predict the probability of two or more discrete categorical or nominal variables, generally based on various explanatory observed or independent variables.  For example, given some conditions such as a married couple owns one car, a logit model preicts the probability that either A) the husband chooses to drive to work or B) he chooses to take public transit.")]),e._v(" "),o("p",[e._v('Logit models can describe probabilities of discrete events or outcomes of stochastic processes that have nothing to do with human agents, but are more commonly used, especial in transportation science, to model human behavior like the example above, and in this context are refered to as choice models.  Choice models predict the probability that a human agent chooses given alternative actions.  The explanatory variables and their associated parameters are understood in this context as describing the attractiveness or "utility" of an alternative to the choice-maker or agent.  The mathematical form of the models can actually be derived from the economic theory of random utility maximization.  Technically, logit models are only one form of discrete choice model, corresponding to the assumption of a particular distributional form for the random component or error term of the utility; however, logit models are by far the most widely used discrete choice models because they have a convenient closed mathematical form which is much easier to use and understand than alternatives.')]),e._v(" "),o("p",[e._v("Logit models are used in travel forecasting to predict many choices made by travelers about their travel.  They were first used to predict the "),o("a",{attrs:{href:"Mode_choice"}},[e._v("choice of travel mode")]),e._v(", e.g., personal automobile or public transit, as early as the 1960s.  Since then, their use has expanded to "),o("a",{attrs:{href:"Destination_Choice_Models"}},[e._v("destination choice")]),e._v(", activity participation choices, temporal choices, and route choices among many others.")]),e._v(" "),o("p",[e._v("Given this widespread use for so many aspects of travel behavior, it is valuable for professionals involved in travel forecasting to have a fundamental grasp of logit models, and this section of the TFResource site, the Self Instructing Course in Choice Modeling, or Logit Manual, for short, is offered as a resource for those interested in developing this core competency.")]),e._v(" "),o("h2",{attrs:{id:"overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),o("p",[e._v("The Logit Manual is divided into several sections or modules:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"LM1"}},[e._v("Introduction to Choice Modeling")])]),e._v(" "),o("li",[o("a",{attrs:{href:"LM2"}},[e._v("Elements of the Choice Decision Process")])]),e._v(" "),o("li",[o("a",{attrs:{href:"LM3"}},[e._v("Utility-Based Choice Theory")])]),e._v(" "),o("li",[o("a",{attrs:{href:"LM4"}},[e._v("The Multinomial Logit Model")])]),e._v(" "),o("li",[o("a",{attrs:{href:"LM5"}},[e._v("Data Preparation and Estimation of Simple Multinomial Logit Models")])]),e._v(" "),o("li",[o("a",{attrs:{href:"LM8"}},[e._v("The Nested Logit Model")])]),e._v(" "),o("li",[o("a",{attrs:{href:"LM12"}},[e._v("Advanced Discrete Choice Modeling")])])]),e._v(" "),o("h2",{attrs:{id:"acknowledgments"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#acknowledgments"}},[e._v("#")]),e._v(" Acknowledgments")]),e._v(" "),o("p",[e._v("The content of this section or 'category' of the TFResource site has been developed based on \"A Self Instructing Course in Mode Choice Modeling: Multinomial and Nested Logit Models\" prepared for the U.S. Department of Transportation, Federal Transit Administration by Frank S. Koppelman and Chandra Bhat with technical support from Vaneet Sethi, Sriram Subramanian, Vincent Bernardin, and Jian Zhang, 2006.")]),e._v(" "),o("p",[e._v("The original content was prepared under funding of the United States Department of Transportation through the Federal Transit Administration (Agmt. 8-17-04-A1/DTFT60-99-D-4013/0012) to AECOMConsult and Northwestern University.  Valuable reviews and comments were provided by students in travel demand modeling classes at Northwestern University and the Georgia Institute of Technology.  In addition, valuable comments, suggestions and questions were given by Rick Donnelly, Laurie Garrow, Joel Freedman, Chuck Purvis, Kimon Proussaloglou, Bruce Williams, Bill Woodford and others.")]),e._v(" "),o("p",[e._v("The original manual in pdf format, "),o("a",{attrs:{href:"http://www.ce.utexas.edu/prof/bhat/courses/lm_draft_060131final-060630.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("A Self Instructing Course in Mode Choice Modeling: Multinomial and Nested Logit Models"),o("OutboundLink")],1),e._v(" by Koppelman and Bhat (2006), is still available and remains a valuable reference.")]),e._v(" "),o("p",[e._v("The content presented here has been edited and adapted for incorporation in the TFResource.org site as a living document by Vince Bernardin, Greg MacFarlane, and Jeff Newman with the intent and hope that the original material could be made more accessible to a broader audience, especially a new generation of professionals and students more oriented towards web-based information.  The editors consulted the original authors before embarking on this new edition, and both Frank and Chandra responded with enthusiam for the new edition.")]),e._v(" "),o("blockquote",[o("p",[o("em",[e._v('"We are very pleased that you are considering making the contents of the manual more widely available. Our sole purpose when writing the manual was to help people get into this exciting field, and we could not be happier to learn about your efforts that further our original purpose."')]),e._v(" - Chandra Bhat, 10/14/2020")])]),e._v(" "),o("p",[e._v("FTA was also consulted and agreed that the material was already in the public domain and gave its blessing on the project to make the manual more accessible.")]),e._v(" "),o("p",[e._v("As with the original manual, the editors and original authors are indebted to all who contributed to or commented on any version of but retain responsibility for any errors or omissions.")]),e._v(" "),o("PagesInCategory",{attrs:{category:"Logit Manual"}}),e._v(" "),o("h2",{attrs:{id:"other-text-resources"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#other-text-resources"}},[e._v("#")]),e._v(" Other Text Resources")]),e._v(" "),o("p",[e._v("In addition to the materials presented here, we recommend these two additional references which should be on the reading list for any person wanting to get seriously into choice modeling:")]),e._v(" "),o("ol",[o("li",[o("a",{attrs:{href:"http://elsa.berkeley.edu/books/choice2.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Discrete Choice Models with Simulation"),o("OutboundLink")],1),e._v(" by Kenneth Train (2009)")]),e._v(" "),o("li",[o("a",{attrs:{href:"http://www.amazon.com/Discrete-Choice-Analysis-Application-Transportation/dp/0262022176",target:"_blank",rel:"noopener noreferrer"}},[e._v("Discrete Choice Analysis: Theory and Application to Travel Demand"),o("OutboundLink")],1),e._v(" by Ben-Akiva and Lerman (1985)")])]),e._v(" "),o("h2",{attrs:{id:"videos"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#videos"}},[e._v("#")]),e._v(" Videos")]),e._v(" "),o("p",[e._v("To start off on a path of having a rich resource on discrete choice modeling, Chandra Bhat has also contributed a set of videos that hopefully will allow for fast, yet deep, returns on time investment.")]),e._v(" "),o("ol",[o("li",[o("a",{attrs:{href:"http://www.caee.utexas.edu/prof/bhat/Videos/Bhat/OnChoiceModeling.pptx",target:"_blank",rel:"noopener noreferrer"}},[e._v("General introduction to choice modeling"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"http://www.caee.utexas.edu/prof/bhat/Videos/Srinivasan/Intro.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("Introduction and overview"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"http://www.caee.utexas.edu/prof/bhat/Videos/Castro/Elementsofthechoiceprocess.wmv",target:"_blank",rel:"noopener noreferrer"}},[e._v("Elements of the choice process"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("Utility-based choice theory")]),e._v(" "),o("li",[e._v("Components of utility")]),e._v(" "),o("li",[e._v("Binary choice (BC) models: Structure and error distributions")]),e._v(" "),o("li",[e._v("BC models: Logit/probit models and location/scale invariance")]),e._v(" "),o("li",[e._v("Data needs for estimation")]),e._v(" "),o("li",[e._v("BC models: Maximum likelihood estimation")]),e._v(" "),o("li",[o("a",{attrs:{href:"http://www.educreations.com/lesson/view/on-choice-modeling-goodness-of-fit/10118541/?ref=link",target:"_blank",rel:"noopener noreferrer"}},[e._v("BC models: Fit measures"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("BC models: Specification")]),e._v(" "),o("li",[e._v("BC models: Interpretation")]),e._v(" "),o("li",[e._v("BC models: Hypothesis testing")]),e._v(" "),o("li",[e._v("Multinomial logit (MNL) model: Overview, structure, and scale/location invariance")]),e._v(" "),o("li",[e._v("MNL model: Specification & interpretation")]),e._v(" "),o("li",[e._v("MNL model: IIA property")]),e._v(" "),o("li",[e._v("MNL model: Elasticity/marginal effects and interpretation")]),e._v(" "),o("li",[e._v("Consumer surplus and compensating variation from MNL models")]),e._v(" "),o("li",[e._v("MNL model: Model building, market segmentation, and closing")])])],1)}),[],!1,null,null,null);t.default=i.exports}}]);