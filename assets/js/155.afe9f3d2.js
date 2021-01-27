(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{350:function(e,t,a){"use strict";a.r(t);var i=a(6),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("PagesInCategory",{attrs:{category:"Mode Choice"}}),e._v(" "),a("p",[e._v("Mode choice is the process where the means of traveling is determined. The means of travel is referred to the travel mode, which may be by private automobile, public transportation, walking, bicycling, or other means. How desirable a travel mode is usually is expressed using "),a("a",{attrs:{href:"Utility"}},[e._v("utilities")]),e._v(". In most travel models, mode choice is applied to travel that has already been estimated, meaning that mode choice is applied to a trip or tour, or group of trips or tours, where the origin and destination are already known.")]),e._v(" "),a("p",[e._v("Mode choice is an important part of models that are used for analyses such as:")]),e._v(" "),a("ul",[a("li",[e._v("Major transportation investment projects since they may attract travelers not only from competing facilities but also competing modes;")]),e._v(" "),a("li",[e._v("Transit service changes, which may encourage or discourage travelers from using transit;")]),e._v(" "),a("li",[e._v("Long range forecasts, where changes in demographics or in travel conditions (e.g. increased congestion) may alter the relative worths of different modes for some or all travelers;")]),e._v(" "),a("li",[e._v("Pricing policy analyses, which may discourage travelers from using modes with increased prices; and")]),e._v(" "),a("li",[e._v("Land use planning analyses, where changes in development patterns may make certain modes more or less attractive relative to others.")])]),e._v(" "),a("p",[e._v("If a model is vehicle-trip based (i.e., if vehicle trips rather than person trips are generated and distributed), there is no need for mode choice or vehicle occupancy modeling capabilities.")]),e._v(" "),a("h2",{attrs:{id:"mode-choice-model-form-and-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mode-choice-model-form-and-structure"}},[e._v("#")]),e._v(" Mode choice model form and structure")]),e._v(" "),a("p",[e._v("In a conventional four-step model, mode choice is considered the third step in the process, following "),a("a",{attrs:{href:"trip_distribution"}},[e._v("trip distribution")]),e._v(" and preceding "),a("a",{attrs:{href:"network_assignment"}},[e._v("network assignment")]),e._v(". In these models, the outputs of trip distribution are person trip tables, which are matrices of trips where the rows and columns represent some aggregate geography, usually transportation analysis zones (TAZ). By convention, at this point in the modeling process, the rows correspond to trip productions and the columns to "),a("a",{attrs:{href:"Trip_Generation"}},[e._v("trip attractions")]),e._v(". The mode choice process determines the percentage of trips made by each mode for each cell in the matrix (zone pair).")]),e._v(" "),a("p",[e._v("In "),a("a",{attrs:{href:"Tour_based_models"}},[e._v("tour based models")]),e._v(", mode choice is typically separated into two stages, the tour level and the trip level. At the tour level, it is assumed that prior steps in the model have generated tours whose origins (usually home) and primary activity locations are known. In a disaggregate activity based model application, for each tour, the probability of using each mode is computed, and the chosen mode is realized through Monte Carlo simulation. At the trip level, it is assumed that prior steps have generated the stops on each tour and their locations and that tour mode choice has been simulated. The trip mode choice component simulates the mode for each trip between every two stops on a tour, including the origin and the primary activity location. Trip mode choice is dependent on tour mode choice in that a chosen tour mode will allow only certain trip modes as valid. For example, on an auto tour, where the vehicle is brought along to all stops, transit may not permitted for trips on that tour.")]),e._v(" "),a("p",[e._v("In both trip based and tour based models, mode choice is determined using probabilities for each mode estimated from the characteristics of the trip, the modes, the traveler, and the environment in which the travel occurs. In an aggregate model, such as a four-step model, mode choice is realized by applying the probabilities as percentages to the trips to which the probabilities apply. In a disaggregate model, such as an activity based model, the probabilities inform a Monte Carlo simulation process that simulates the mode for each tour/trip.")]),e._v(" "),a("p",[e._v("Typically, mode choice is formulated as a discrete choice model with alternatives corresponding to the specific tour or trip modes. The following types of mode alternatives may be found in these models:")]),e._v(" "),a("ul",[a("li",[e._v("Auto\n"),a("ul",[a("li",[e._v("Drive alone")]),e._v(" "),a("li",[e._v("Shared Ride\n"),a("ul",[a("li",[e._v("Shared ride with 2 occupants")]),e._v(" "),a("li",[e._v("Shared ride with 3 or more occupants")])])])])])]),e._v(" "),a("p",[e._v("In some models, auto modes may be further stratified by having separate sets of alternatives for potential priced road users and non-priced road users.")]),e._v(" "),a("ul",[a("li",[e._v("Transit\n"),a("ul",[a("li",[e._v("Transit with walk access at the home end")]),e._v(" "),a("li",[e._v("Transit with walk access at the home end")])])])]),e._v(" "),a("p",[e._v("In some models, transit modes may be further stratified by having separate sets of alternatives for by type of transit, such as commuter rail, heavy rail, light rail, express bus, local bus, etc. In some models, school bus may be an alternative for tours or trips with a school purpose.")]),e._v(" "),a("ul",[a("li",[e._v("Non-motorized\n"),a("ul",[a("li",[e._v("Walk")]),e._v(" "),a("li",[e._v("Bicycle")])])])]),e._v(" "),a("p",[e._v("Some regions might specify more complex travel models than are warranted based on existing travel choices represented in a travel survey. This is often the case for regions that anticipate testing new alternatives in the future. For example, a region that does not have HOV lanes in a base year might specify a model that stratifies the auto mode by group size rather than simply modeling drive alone and carpool trips. This would provide the capability for testing alternative carpool lane treatments. Likewise, an area without fixed guideway transit service may specify mode models that include walk and drive access (to estimate park-and-ride lot usage) and fixed guideway submodes in order to test future alternatives.")]),e._v(" "),a("h2",{attrs:{id:"factors-influencing-mode-choice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#factors-influencing-mode-choice"}},[e._v("#")]),e._v(" Factors influencing mode choice")]),e._v(" "),a("h3",{attrs:{id:"traveler-characteristics-socio-demographics-attitudes-perceptions-lifestyle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#traveler-characteristics-socio-demographics-attitudes-perceptions-lifestyle"}},[e._v("#")]),e._v(" Traveler characteristics (socio-demographics, attitudes, perceptions, lifestyle)")]),e._v(" "),a("p",[e._v("The characteristics of individual travelers affects their choice of mode. These may include observed characteristics, such as age, gender, driver’s license status, or worker or student status, and unobserved characteristics, such as awareness of transportation options, consideration of specific modes, attitudes, and personal preferences. Characteristics of a traveler’s household, such as income level and vehicle availability, may also affect mode choice.")]),e._v(" "),a("h3",{attrs:{id:"modal-availability-and-characteristics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modal-availability-and-characteristics"}},[e._v("#")]),e._v(" Modal availability and characteristics")]),e._v(" "),a("p",[e._v("Obviously, for a mode to be chosen, it must be available to the traveler. Availability may not be able to always be clearly defined. For example, an auto driver mode is generally unavailable to a young child, but it may also be unavailable to a disabled person, someone without a driver’s license, or someone who does not have a vehicle available. Sometimes these characteristics may not be observable; for example, someone whose household does not own a car may still be able to borrow or rent an auto or use a car sharing service.")]),e._v(" "),a("p",[e._v("In general, there are no restrictions for any traveler to be an auto passenger. Auto driver modes may be limited to those who can be defined as eligible to drive, such as persons over the legal driving age, and perhaps those holding driver’s licenses, if that characteristic is simulated in the model. It is more likely that such characteristics would be known in disaggregate activity based models than in household based aggregate models.")]),e._v(" "),a("p",[e._v("In many models, however, auto drivers are not distinguished from passengers, and the auto mode definitions are based on vehicle occupancy (e.g., drive alone, two person shared ride, etc.). In this case, any restrictions are usually applied only for the drive alone mode.")]),e._v(" "),a("p",[e._v("The availability of the walk mode is in theory unrestricted, unless those with mobility limitations that would prevent the ability to walk are specifically identified in the model. However, as a practical matter, very long trips or tours almost never use the walk mode, and in many models, trips over a certain length are deemed not to have the walk mode available. The same type of restriction is sometimes implemented for bicycle modes as well (thought with a longer maximum trip length.")]),e._v(" "),a("p",[e._v("Availability of public transit modes is generally not restricted; however, there may be no reasonable transit paths for some origin-destination combinations. It is common practice to separate transit modes into those with walk access/egress at the home end and those with auto access/egress. The walk access mode often has restrictions on the maximum walk length, similar to those used for the walk mode, and so there may be origin-destination combinations where there are no valid transit paths (for example, if the origin is not within the maximum walk distance of any transit stop). In theory, there is no limit on auto access distance, but there may be practical limitations imposed in some models. In general, a transit mode is deemed to be available if the "),a("a",{attrs:{href:"Transit_Network_Service_Determination"}},[e._v("transit path building")]),e._v(" process is able to find a valid path from the origin to the destination.")]),e._v(" "),a("h3",{attrs:{id:"mode-characteristics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mode-characteristics"}},[e._v("#")]),e._v(" Mode characteristics")]),e._v(" "),a("p",[e._v("Mode characteristics are usually measures of the level of service provided by the mode. For motorized (auto and transit) modes, the following characteristics are often used:")]),e._v(" "),a("ul",[a("li",[e._v("In-vehicle time")]),e._v(" "),a("li",[e._v("Walk egress time, which may be referred to as “terminal time”")]),e._v(" "),a("li",[e._v("Parking cost")])]),e._v(" "),a("p",[e._v("For auto modes, the auto operating cost is usually used as a characteristic. This is generally defined as the marginal cost of operating the vehicle for the trip or tour, which in large part is the fuel cost but may also include other costs that vary by the distance traveled.")]),e._v(" "),a("p",[e._v("For transit modes, other characteristics that are often part of the mode choice model include:")]),e._v(" "),a("ul",[a("li",[e._v("Walk access time")]),e._v(" "),a("li",[e._v("Auto access time")]),e._v(" "),a("li",[e._v("Initial wait time")]),e._v(" "),a("li",[e._v("Transfer wait time")]),e._v(" "),a("li",[e._v("Transfer travel time (e.g. walking between stops)")]),e._v(" "),a("li",[e._v("Number of transfers")]),e._v(" "),a("li",[e._v("Fare")])]),e._v(" "),a("p",[e._v("For non-motorized modes, characteristics are usually limited to time and or distance. Because speeds may vary much more among travelers for non-motorized than for motorized modes, it may be difficult to estimate travel times for individual travelers. For bicycle modes, a limited amount of research has been done indicating that bicyclists prefer paths that include dedicated bicycle facilities, fewer turns, less vehicular traffic, fewer traffic controls, smooth pavement, level terrain, and no on-street parking. Some of these characteristics, however, may be difficult to quantify in some modeling environments.")]),e._v(" "),a("h3",{attrs:{id:"characteristics-of-the-journey"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#characteristics-of-the-journey"}},[e._v("#")]),e._v(" Characteristics of the journey")]),e._v(" "),a("p",[e._v("Characteristics of the tour or trip may have an effect on the mode choice decision. Some examples include:")]),e._v(" "),a("p",[a("strong",[e._v("Time of day")]),e._v(" – This may affect not only the level of transportation service (which may also be considered in the mode characteristics variables) but also considerations such as a higher preference for bicycling, walking, or waiting in daylight hours.")]),e._v(" "),a("p",[a("strong",[e._v("Stops on a tour")]),e._v(" – In a tour based model, the presence, number, and type of stops may have an effect on mode choice. For example, it may be more desirable to use an auto for a tour with many shopping stops, or with stops related to picking up or dropping off passengers.")]),e._v(" "),a("h3",{attrs:{id:"land-use"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#land-use"}},[e._v("#")]),e._v(" Land use")]),e._v(" "),a("p",[e._v("Certain land use characteristics may favor the use of some modes. In general, more densely developed areas see higher shares of transit and walking modes. The land use characteristics that affect mode choice are often included in the form of variables representing density of development or other features near the origin or destination of the tour or trip. Some examples include:")]),e._v(" "),a("ul",[a("li",[e._v("Population density")]),e._v(" "),a("li",[e._v("Employment density, often by type")]),e._v(" "),a("li",[e._v("Measures of “mixed land use” density that consider how much different types of development (e.g. commercial and residential) occur")]),e._v(" "),a("li",[e._v("Intersection density, which considers the density of the road network as well as its connectivity")])]),e._v(" "),a("h2",{attrs:{id:"mathematical-formulation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mathematical-formulation"}},[e._v("#")]),e._v(" Mathematical formulation")]),e._v(" "),a("p",[e._v("Most mode choice models are "),a("a",{attrs:{href:"Choice_models"}},[e._v("discrete choice models")]),e._v(", with logit (multinomial, nested, or cross-nested) being the most comnmon formualtion.")]),e._v(" "),a("h2",{attrs:{id:"practical-issues-in-mode-choice-modeling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#practical-issues-in-mode-choice-modeling"}},[e._v("#")]),e._v(" Practical Issues in Mode Choice Modeling")]),e._v(" "),a("h3",{attrs:{id:"market-segmentation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#market-segmentation"}},[e._v("#")]),e._v(" Market segmentation")]),e._v(" "),a("p",[e._v("Experience shows that different segments of the population behave differently regarding mode choice. Some examples are straightforward; for example, travelers without a car available are less likely to use auto modes than travelers who always have a car available. Therefore, some segments may be defined as person or household characteristics (gender, household income, number of vehicles or vehicle sufficiency). Other segments may represent geographic or land use characteristics. For example, a model may include a segment for travel to the central business district (CBD) or to the regional airport. While some of the effects of these types of segmentation may be captured in other model variables (e.g., parking prices at the airport or density of CBD land use), other effects may not be easily captures (e.g., the fact that many attractions can be reached easily without an auto in the CBD).")]),e._v(" "),a("p",[e._v("A critical issue regarding segmentation in mode choice modeling is the availability of data for model estimation and validation. Since most tours or trips are made by auto modes, estimation data sets are dominated by auto travel. The data to estimate separate models or parameters by segment may often be insufficient. There are also data sufficiency issues regarding validation and calibration as there may be insufficient data to determine specific values of segment-specific parameters.")]),e._v(" "),a("h3",{attrs:{id:"transferability-of-mode-choice-models"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transferability-of-mode-choice-models"}},[e._v("#")]),e._v(" Transferability of mode choice models")]),e._v(" "),a("p",[e._v("Because of the expense of data collection and the relatively low shares of non-auto modes in survey data sets, "),a("a",{attrs:{href:"Model_Transferability"}},[e._v("transferred mode choice models")]),e._v(" are fairly common. The research on the validity of mode choice model transferring is mixed, as documented by Cambridge Systematics et al., 2012 and Rossi and Bhat, 2014.")]),e._v(" "),a("h2",{attrs:{id:"calibration-validation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#calibration-validation"}},[e._v("#")]),e._v(" Calibration/Validation")]),e._v(" "),a("p",[e._v("(see "),a("a",{attrs:{href:"Model_calibration_and_validation"}},[e._v("Model calibration and validation")]),e._v(")")]),e._v(" "),a("p",[e._v("The FHWA Model Validation Manual (Cambridge Systematics, Inc. et al., 2010) includes detailed information about validation of mode choice models in Chapter 7. The main sources of data for validation of mode choice models include the following:")]),e._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"Transit_Data"}},[e._v("Transit ridership counts")]),e._v(" – Transit ridership counts have the best information on the total amount of travel by transit, usually at the route level. It is important to recognize, however, that ridership (boarding) counts represent “unlinked trips,” meaning that a person is counted each time he or she boards a new transit vehicle. So a trip that involves transit transfers is counted multiple times. Mode choice models generally consider “linked trips,” where a trip including transfers counts as only one trip. Information on transfer rates is required to convert unlinked trips to linked trips; such information generally is obtained from transit on-board surveys.")])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"Transit_onboard_surveys"}},[e._v("Transit rider survey")]),e._v(" – A transit rider survey (typically an on-board survey) is an invaluable source of information for validation of the transit outputs of mode choice models but may have also been a data source for model estimation. A wealth of information that cannot be obtained from transit counts is available from on-board surveys, including:")])]),e._v(" "),a("li",[a("p",[e._v("Transit trip origin-destination patterns by trip purpose")])]),e._v(" "),a("li",[a("p",[e._v("Access modes;")])]),e._v(" "),a("li",[a("p",[e._v("Transit paths (surveys should ask riders to list all routes used in order for the linked trip);")])]),e._v(" "),a("li",[a("p",[e._v("Transit submodes used (e.g., bus, light rail);")])]),e._v(" "),a("li",[a("p",[e._v("Transit transfer activity; and")])]),e._v(" "),a("li",[a("p",[e._v("Characteristics of the surveyed riders and their households.")])])]),e._v(" "),a("p",[e._v("It should be noted that transit on-board surveys usually provide data only for individual transit trips, not tours, and so their use in estimating transit travel in tour-based models is limited.")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"Household_travel_surveys"}},[e._v("Household travel/activity survey")]),e._v(" – If such a survey is available, it may have also been a data source for model estimation although data from other sources such as transit on-board surveys may also have been used in model estimation. The household survey is the best source for information on nontransit travel data since the number of observations for transit travel is usually small. The expanded household survey data can be used to produce observed mode shares for nontransit travel by purpose for a number of geographic and demographic market segments.")]),e._v(" "),a("li",[a("a",{attrs:{href:"Census_and_Employment_Data"}},[e._v("Census data")]),e._v(" – The Census Transportation Planning Package (CTPP) contains information on modes for work travel. CTPP is based on Census Bureau uses the American Community Survey (ACS) "),a("a",{attrs:{href:"https://www.census.gov/programs-surveys/acs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("3"),a("OutboundLink")],1),e._v(", which is conducted continuously, to collect data on work location and travel (among other items).")]),e._v(" "),a("li",[e._v("National sources – National data sources include the National Household Travel Survey (NHTS) "),a("a",{attrs:{href:"http://nhts.ornl.gov/",target:"_blank",rel:"noopener noreferrer"}},[e._v("4"),a("OutboundLink")],1),e._v(", NCHRP Report 716 "),a("a",{attrs:{href:"http://www.trb.org/Publications/Blurbs/167055.aspx",target:"_blank",rel:"noopener noreferrer"}},[e._v("5"),a("OutboundLink")],1),e._v(", and TCRP Report 73, Characteristics of Urban Travel Demand "),a("a",{attrs:{href:"http://onlinepubs.trb.org/onlinepubs/tcrp/tcrp_rpt_73a.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("6"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[a("a",{attrs:{href:"Traffic_Data"}},[e._v("Highway usage data")]),e._v(" – Data on highway usage such as toll road and high-occupancy vehicle lane use would be helpful validation data for models that include related modal alternatives.")])]),e._v(" "),a("p",[e._v("The most basic aggregate checks of mode choice model results are comparisons of modeled trips or tours by mode, or mode shares, to observed data by market segment. Market segments include trip or tour purposes as well as demographic segments, such as income or vehicle availability levels, and geographically defined segments. It is critical to remember, though, that aggregate validation of regional mode shares is insufficient to validate the mode choice model. Disaggregate validation, and validation of market segments of interest, are also needed.")]),e._v(" "),a("p",[e._v("Mode choice models are typically applied using trip tables (or their tour-based equivalents) as inputs. The mode choice model’s results, therefore, are shares of the total trip table for each market segment that use each of the modal alternatives. Validation of the model’s aggregate results involves checking the shares for the model’s base year scenario results against observed mode shares.")]),e._v(" "),a("p",[e._v("A household survey is the only comprehensive data source covering all modes, and there-fore is the only source for mode shares. However, mode shares for modes that are used relatively infrequently – notably transit modes – as well as mode shares for relatively small segments of the population (such as members of zero-vehicle, high income households) cannot be accurately estimated from household surveys due to small sample sizes.")]),e._v(" "),a("p",[e._v("Transit ridership counts provide estimates of total transit trips, not mode shares. To convert these trips to shares, an estimate of the total trip table for each market segment is needed. Assuming good validation of the trip generation and distribution components (or their tour-based equivalents), the trip table outputs from the trip distribution model can provide this information. Basically, the transit trips by submode, access mode, trip purpose, and other segmentation level, segmented using the transit rider survey data, can be subtracted from the total trips represented in the trip table to obtain estimates of “observed” nontransit trips. The nontransit trips can be separated into trips by individual mode (auto and nonmotorized submodes) using information from the household travel survey. While it may be problematic to find an alternate source for some segments or modes (such as bicycle travel), transit trips and shares by segment may be estimated using data sources including ridership counts and transit rider surveys.")]),e._v(" "),a("p",[e._v("The mode choice model validation process is tied in with the "),a("a",{attrs:{href:"Model_calibration_and_validation"}},[e._v("highway and transit assignment validation processes")]),e._v(" because these processes are better able to make use of independent aggregate data at the link or route level. It is common practice to compare overall mode choice model results to the observed data for the region. It is important to recognize that this type of regional check is not sufficient to determine that the mode choice model is validated, any more than it would be sufficient to validate a highway assignment model simply by comparing total regional vehicle miles traveled (VMT) to observed VMT. Aggregate validation must also be performed for all relevant market segments for which information can be obtained.")]),e._v(" "),a("p",[e._v("Any calibration of the transit assignment process may lead to model changes that affect mode choice, whether they are network changes, revisions to path building or "),a("a",{attrs:{href:"Skim_Matrix"}},[e._v("skimming")]),e._v(", or other changes to the model. The mode choice models cannot be considered validated until the transit assignment model has also been validated.")]),e._v(" "),a("p",[e._v("In disaggregate validation, model predictions are compared with observed data to reveal systematic biases.\nDisaggregate checks are appropriate for estimated models, as opposed to transferred models where the estimation data set would not be available. Logit models are disaggregately estimated (one record per trip/activity), and therefore disaggregate validation should be performed when logit mode choice models are estimated, along with the aggregate checks described above.")]),e._v(" "),a("p",[e._v("Generally, disaggregate validation is performed by applying the model using a data set with known choice results (such as a revealed-preference survey data set) and checking the results by one or more segmentation variables. Examples of segmentation variables include:")]),e._v(" "),a("ul",[a("li",[e._v("Income level;")]),e._v(" "),a("li",[e._v("Vehicle availability level;")]),e._v(" "),a("li",[e._v("Geographic segmentation (e.g., counties, area types); and")]),e._v(" "),a("li",[e._v("Trip length segments.")])]),e._v(" "),a("p",[e._v("Disaggregate validation of a model ideally should be performed using a data set that is independent of the data set used for model estimation. However, most urban area household travel surveys have such small sample sizes that the entire data set is needed for model estimation and so there is no independent model estimation data set available for validation. This is especially true for mode choice models, where the household survey itself is often inadequate for model estimation due to low incidence of transit travel.")]),e._v(" "),a("p",[e._v("Limited disaggregate validation can be performed using the same data set used for model estimation, but reporting the results by market segment. Logit model estimation software has the capability to apply the estimated model to a data set in the same form as the estimation data set. For example, a logit mode choice model could be applied to the data set used for estimation but the results may be reported by vehicle availability or income level. It might be found, for example, that transit with auto access is being chosen too often in the model by households with zero vehicles.")]),e._v(" "),a("p",[e._v("Mode choice model parameters, the coefficients and constants in the utility functions, may be estimated using local data, transferred from another model, or asserted. An important reasonableness check is that all mode choice model parameters should be of reasonable sign and magnitude. NCHRP Report 716 "),a("a",{attrs:{href:"http://www.trb.org/Publications/Blurbs/167055.aspx",target:"_blank",rel:"noopener noreferrer"}},[e._v("7"),a("OutboundLink")],1),e._v(" provides examples of mode choice model parameters for level of service variables and relationships among parameters.")]),e._v(" "),a("p",[e._v("Sensitivity testing can be performed for mode choice models by varying model inputs and checking results for reasonableness. Model inputs that can be varied include level of service variables used in the trip distribution model (time/speed and cost) and the demographic or zone-level variables that are used as model inputs. Some example tests include:")]),e._v(" "),a("ul",[a("li",[e._v("Increasing or decreasing highway or transit travel times by a fixed percentage regionwide;")]),e._v(" "),a("li",[e._v("Increasing/decreasing parking costs in the CBD by a fixed percentage;")]),e._v(" "),a("li",[e._v("Increasing/decreasing headways on selected transit routes or submodes by a fixed percentage or amount;")]),e._v(" "),a("li",[e._v("Increasing/decreasing fares on selected transit submodes by a fixed percentage;")]),e._v(" "),a("li",[e._v("Changing development patterns for forecast years by moving projected new activity among different parts of the modeled region (e.g., from suburbs to small urban centers or from outlying areas to infill); and")]),e._v(" "),a("li",[e._v("Reallocating the number of households by income level for a forecast year.")])]),e._v(" "),a("p",[e._v("The resultant changes in demand due to changes in a model input variable reflect the sensitivity to the variable; the sensitivity level is determined by the coefficient of the variable in the utility function. Simple “parametric” sensitivity tests can be performed by introducing small changes in the input variable or in the parameter itself and checking the results for reasonableness. The changes in demand for a modal alternative (or group of alternatives) with respect to a change in a particular variable can be expressed as arc elasticities.")]),e._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),a("p",[e._v("Cambridge Systematics, Inc. (2010). Travel Model Validation and Reasonableness Checking Manual: Second Edition, prepared for Federal Highway Administration. "),a("a",{attrs:{href:"https://www.fhwa.dot.gov/planning/tmip/publications/other_reports/validation_and_reasonableness_2010/fhwahep10042.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.fhwa.dot.gov/planning/tmip/publications/other_reports/validation_and_reasonableness_2010/fhwahep10042.pdf"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Cambridge Systematics, Inc., Vanasse Hangen Brustlin, Inc., Gallop Corporation, C.R. Bhat, Shapiro Transportation Consulting, LLC, and Martin/Alexiou/Bryson, PLLC (2012). NCHRP Report 716, Travel Demand Forecasting: Parameters and Techniques, Appendix B, Section B.3.  "),a("a",{attrs:{href:"http://www.trb.org/Publications/Blurbs/167055.aspx",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.trb.org/Publications/Blurbs/167055.aspx"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Rossi, T.F. and C.R. Bhat (2014). Guide for Travel Model Transfer. Cambridge Systematics, Inc., prepared for Federal Highway Administration. "),a("a",{attrs:{href:"http://www.fhwa.dot.gov/planning/tmip/publications/other_reports/travel_model_transfer/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.fhwa.dot.gov/planning/tmip/publications/other_reports/travel_model_transfer/"),a("OutboundLink")],1)])],1)}),[],!1,null,null,null);t.default=o.exports}}]);