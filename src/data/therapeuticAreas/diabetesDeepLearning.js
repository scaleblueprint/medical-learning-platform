export const diabetesDeepLearning = {
  'glucose-homeostasis': {
    level: 'foundation',
    beginnerIntro: 'Start with one question: after a carbohydrate-containing meal raises blood glucose, how does the body decide what should be used now, stored for later, or released between meals? Glucose homeostasis is the coordinated answer.',
    diagram: 'glucose-homeostasis',
    keyTakeaways: [
      'Insulin is released from pancreatic beta cells when glucose availability is high and promotes storage and use of nutrients.',
      'Glucagon is released from pancreatic alpha cells especially when glucose availability falls and supports hepatic glucose production.',
      'The liver acts as an important glucose buffer; skeletal muscle and adipose tissue respond differently from liver.',
      'Homeostasis means regulated movement around a useful range, not a perfectly fixed glucose value.'
    ],
    terms: [
      {term:'Homeostasis', plain:'Keeping an internal variable within a useful regulated range.', medical:'Coordinated physiological regulation that opposes disturbances and supports internal stability.'},
      {term:'Insulin', plain:'A pancreatic hormone that signals that fuel is available.', medical:'A peptide hormone from pancreatic beta cells that promotes anabolic nutrient handling and suppresses hepatic glucose production.'},
      {term:'Glucagon', plain:'A pancreatic hormone that helps make glucose available between meals.', medical:'A peptide hormone from pancreatic alpha cells that promotes hepatic glycogenolysis and gluconeogenesis.'},
      {term:'Pancreatic islet', plain:'A small endocrine cell cluster inside the pancreas.', medical:'Islets of Langerhans contain beta, alpha, delta and other endocrine cell populations.'}
    ],
    mechanisms: [
      {title:'1 · After a meal', body:'Absorbed glucose reaches the circulation. Rising glucose availability favours insulin secretion. Insulin helps shift metabolism toward glucose use and storage while suppressing excessive hepatic glucose output.'},
      {title:'2 · Between meals', body:'As incoming glucose falls, insulin levels fall and glucagon becomes relatively more important. The liver supports circulating glucose first through glycogen breakdown and, with longer fasting, through gluconeogenesis.'},
      {title:'3 · Tissue responses are not identical', body:'Skeletal muscle and adipose tissue use insulin-responsive GLUT4 transporters for much of their regulated glucose uptake. Hepatic glucose handling is regulated differently, so the popular “insulin opens every cell” analogy is incomplete.'}
    ],
    recaps: ['insulin-vs-glucagon','fed-vs-fasting'],
    learnMore: ['why-insulin-is-not-a-key','glut4-and-tissue-differences'],
    sources: [
      {label:'NCBI Bookshelf — Physiology, Glucose Metabolism', url:'https://www.ncbi.nlm.nih.gov/books/NBK560599/'},
      {label:'NCBI Bookshelf — Glucagon Physiology', url:'https://www.ncbi.nlm.nih.gov/books/NBK279127/'},
      {label:'NCBI Bookshelf — Insulin Metabolic Effects', url:'https://www.ncbi.nlm.nih.gov/books/NBK525983/'}
    ]
  },
  'glucose-metabolism': {
    level: 'foundation',
    beginnerIntro: 'Biochemistry gives names to the routes glucose can take. Instead of memorising pathway names first, begin with four jobs: use glucose, store glucose, release stored glucose, and make new glucose.',
    diagram: 'metabolic-crossroads',
    keyTakeaways: [
      'Glycolysis uses glucose through a pathway that ultimately supports ATP production and other metabolic needs.',
      'Glycogenesis stores glucose as glycogen, especially in liver and skeletal muscle.',
      'Glycogenolysis breaks glycogen down; liver glycogen can help support blood glucose between meals.',
      'Gluconeogenesis produces glucose from non-carbohydrate precursors, especially during fasting.'
    ],
    terms: [
      {term:'Glycolysis', plain:'Using glucose through a metabolic pathway.', medical:'A cytosolic pathway converting glucose to pyruvate while generating ATP and reducing equivalents.'},
      {term:'Glycogenesis', plain:'Packing glucose away as glycogen.', medical:'Synthesis of glycogen from glucose-derived intermediates.'},
      {term:'Glycogenolysis', plain:'Opening glycogen stores.', medical:'Breakdown of glycogen to glucose-1-phosphate and related products; hepatic metabolism can support blood glucose.'},
      {term:'Gluconeogenesis', plain:'Making new glucose when incoming glucose is limited.', medical:'Synthesis of glucose from non-carbohydrate precursors such as lactate, glycerol and glucogenic amino-acid carbon skeletons.'}
    ],
    mechanisms: [
      {title:'Fed state', body:'Higher insulin signalling favours glucose utilisation and storage pathways. Liver and muscle increase glycogen synthesis, while excess energy can also be directed toward lipid synthesis.'},
      {title:'Early fasting', body:'Falling insulin and a higher glucagon-to-insulin influence favour hepatic glycogen breakdown, helping maintain circulating glucose.'},
      {title:'Longer fasting', body:'As liver glycogen becomes limited, gluconeogenesis becomes increasingly important. The body also shifts other tissues toward alternate fuels so glucose can be prioritised where needed.'}
    ],
    recaps: ['fed-vs-fasting','four-glucose-pathways'],
    learnMore: ['liver-vs-muscle-glycogen','why-gluconeogenesis-matters'],
    sources: [
      {label:'NCBI Bookshelf — Physiology, Glucose', url:'https://www.ncbi.nlm.nih.gov/books/NBK545201/'},
      {label:'NCBI Bookshelf — Physiology, Glucose Metabolism', url:'https://www.ncbi.nlm.nih.gov/books/NBK560599/'},
      {label:'NCBI Bookshelf — Insulin Metabolic Effects', url:'https://www.ncbi.nlm.nih.gov/books/NBK525983/'}
    ]
  },
  'diabetes-pathology': {
    level: 'core',
    beginnerIntro: 'Pathology asks two separate questions: what mechanism creates persistent hyperglycaemia, and how does long-term metabolic disturbance contribute to tissue injury? Keeping those two questions separate makes diabetes easier to understand.',
    diagram: 'type1-type2-pathology',
    keyTakeaways: [
      'Type 1 diabetes is characterised by autoimmune destruction of pancreatic beta cells and severe insulin deficiency.',
      'Type 2 diabetes involves insulin resistance together with progressive beta-cell dysfunction and insufficient insulin effect for the body’s needs.',
      'Persistent hyperglycaemia contributes to microvascular complications affecting retina, kidney and nerves.',
      'Diabetes is also strongly associated with macrovascular disease involving larger arteries and cardiovascular risk.'
    ],
    terms: [
      {term:'Hyperglycaemia', plain:'Blood glucose is higher than the normal regulated range.', medical:'Abnormally elevated circulating glucose caused by imbalance between glucose appearance, utilisation and hormonal regulation.'},
      {term:'Insulin resistance', plain:'Target tissues respond less effectively to insulin.', medical:'Reduced biological response to a given insulin concentration in insulin-responsive metabolic pathways.'},
      {term:'Beta-cell dysfunction', plain:'The insulin-producing cells can no longer compensate adequately.', medical:'Progressive impairment of pancreatic beta-cell insulin secretion and functional capacity.'},
      {term:'Microvascular complication', plain:'Damage involving very small blood vessels and specialised tissues.', medical:'Diabetes-associated injury affecting microcirculatory beds, classically including retinopathy, nephropathy and neuropathic microvascular contributions.'},
      {term:'Macrovascular disease', plain:'Disease involving larger arteries.', medical:'Atherosclerotic cardiovascular disease affecting coronary, cerebral and peripheral arterial circulations.'}
    ],
    mechanisms: [
      {title:'Type 1 pathway', body:'Autoimmune beta-cell destruction reduces endogenous insulin production. Without sufficient insulin action, glucose utilisation and storage are disrupted and hepatic glucose production is inadequately restrained.'},
      {title:'Type 2 pathway', body:'Insulin-responsive tissues become less responsive, and beta cells initially compensate by increasing insulin output. Over time, beta-cell function may decline, so insulin effect becomes inadequate relative to metabolic demand.'},
      {title:'From hyperglycaemia to complications', body:'Chronic metabolic disturbance affects vascular and cellular function through multiple mechanisms. Students should avoid reducing all complications to a single pathway; the important first map is sustained metabolic stress → tissue-specific vulnerability → progressive organ damage.'}
    ],
    recaps: ['insulin-vs-glucagon','type1-vs-type2','micro-vs-macrovascular'],
    learnMore: ['insulin-resistance-deep-dive','why-complications-are-organ-specific'],
    sources: [
      {label:'NIDDK — What Is Diabetes?', url:'https://www.niddk.nih.gov/health-information/diabetes/overview/what-is-diabetes'},
      {label:'NIDDK — Insulin Resistance & Prediabetes', url:'https://www.niddk.nih.gov/health-information/diabetes/overview/what-is-diabetes/prediabetes-insulin-resistance'}
    ]
  },
  'diabetes-pharmacology': {
    level: 'core',
    beginnerIntro: 'Pharmacology becomes much easier when every drug class is attached to a physiological problem. Ask “what is this class changing?” before memorising names, kinetics or adverse effects.',
    diagram: 'drug-sites',
    keyTakeaways: [
      'Insulin preparations replace or supplement insulin action directly.',
      'Metformin primarily reduces excessive hepatic glucose production and improves insulin sensitivity.',
      'Sulfonylureas increase pancreatic insulin secretion and therefore depend on functioning beta cells.',
      'SGLT2 inhibitors reduce renal glucose reabsorption, increasing urinary glucose excretion.',
      'Incretin-based therapies modify glucose-dependent hormonal pathways involved in insulin secretion, glucagon regulation and other metabolic effects.'
    ],
    terms: [
      {term:'Pharmacodynamics', plain:'What a medicine does to the body.', medical:'Relationship between drug concentration/action at biological targets and the resulting physiological effects.'},
      {term:'Pharmacokinetics', plain:'What the body does to a medicine over time.', medical:'Absorption, distribution, metabolism and elimination of a drug.'},
      {term:'Mechanism of action', plain:'The biological process a drug changes.', medical:'The molecular or physiological interaction through which a medicine produces its effects.'},
      {term:'Adverse drug reaction', plain:'An unwanted harmful effect linked to a medicine.', medical:'A harmful and unintended response occurring at doses normally used for prevention, diagnosis or treatment.'}
    ],
    mechanisms: [
      {title:'Replace a missing signal', body:'Insulin therapy directly supplies the hormone when endogenous insulin is absent or insufficient. Different preparations are designed to produce different time-action profiles.'},
      {title:'Reduce glucose entering the blood from the liver', body:'Metformin is classically organised around suppression of excessive hepatic glucose production, with additional effects on insulin sensitivity and metabolism.'},
      {title:'Increase insulin secretion', body:'Sulfonylureas stimulate pancreatic beta cells to release insulin. Because the action is not strictly limited to times of high glucose, hypoglycaemia is an important class concept.'},
      {title:'Change kidney handling of glucose', body:'SGLT2 inhibitors reduce glucose reabsorption in the proximal renal tubule, so more filtered glucose leaves in urine.'},
      {title:'Use incretin physiology', body:'GLP-1 receptor agonists and DPP-4 inhibitors use incretin-related pathways in different ways. Their effects are glucose-dependent to varying degrees and extend beyond a simple “more insulin” description.'}
    ],
    recaps: ['type1-vs-type2','diabetes-drug-map'],
    learnMore: ['drug-class-comparison','why-mechanism-before-memorisation'],
    sources: [
      {label:'NMC CBME 2024 — PH7.1 diabetes pharmacology competency', url:'https://www.nmc.org.in/wp-content/uploads/2026/02/12bCompetencyBasedMedicalEducationCBMECurriculum12092024.pdf'},
      {label:'NIDDK — Diabetes overview', url:'https://www.niddk.nih.gov/health-information/diabetes/overview/what-is-diabetes'}
    ]
  }
};

export const diabetesMiniTopics = {
  'insulin-vs-glucagon': {
    title:'Insulin vs glucagon',
    subtitle:'Two pancreatic signals that help coordinate fed and fasting metabolism.',
    parentSubjects:['Physiology','Biochemistry','Pathology'],
    diagram:'insulin-glucagon',
    plain:'Think of insulin and glucagon as opposing but coordinated signals. Insulin is prominent when nutrients are abundant; glucagon is important when the liver needs to support circulating glucose.',
    sections:[
      {title:'Insulin', body:'Secreted by pancreatic beta cells. It supports glucose utilisation and storage, promotes glycogen and lipid synthesis, and suppresses excessive hepatic glucose production.'},
      {title:'Glucagon', body:'Secreted by pancreatic alpha cells. It acts strongly on the liver to increase glycogenolysis and gluconeogenesis when glucose availability is low.'},
      {title:'Why “opposite hormones” is incomplete', body:'Their secretion and effects depend on nutrient state, autonomic input, amino acids and other hormones. The insulin-to-glucagon relationship is a useful organising idea, not the whole endocrine system.'}
    ],
    terms:['Beta cell','Alpha cell','Glycogenolysis','Gluconeogenesis'],
    remember:'Insulin favours use and storage; glucagon favours hepatic glucose mobilisation.',
    sources:['https://www.ncbi.nlm.nih.gov/books/NBK279127/','https://www.ncbi.nlm.nih.gov/books/NBK525983/']
  },
  'fed-vs-fasting': {
    title:'Fed state vs fasting state',
    subtitle:'A simple framework for understanding why metabolic pathways switch direction.',
    parentSubjects:['Physiology','Biochemistry'],
    diagram:'fed-fasting',
    plain:'After eating, the body can use and store incoming nutrients. Between meals, it must maintain fuel availability without continuous food intake.',
    sections:[
      {title:'Fed state', body:'Insulin signalling rises. Glucose use, glycogen synthesis, lipid synthesis and protein synthesis are favoured.'},
      {title:'Early fasting', body:'Insulin falls and glucagon influence rises. Hepatic glycogen breakdown becomes important for maintaining blood glucose.'},
      {title:'Longer fasting', body:'Gluconeogenesis becomes increasingly important, while many tissues shift toward greater use of fatty acids and other fuels.'}
    ],
    terms:['Postprandial','Fasting','Glycogenesis','Glycogenolysis','Gluconeogenesis'],
    remember:'Fed = use and store. Fasting = mobilise and make.',
    sources:['https://www.ncbi.nlm.nih.gov/books/NBK545201/','https://www.ncbi.nlm.nih.gov/books/NBK560599/']
  },
  'four-glucose-pathways': {
    title:'The four glucose pathway names that first-timers mix up',
    subtitle:'Separate the similar words by the job each pathway performs.',
    parentSubjects:['Biochemistry'],
    diagram:'four-pathways',
    plain:'The names are easier if you ignore spelling at first and attach each one to a job.',
    sections:[
      {title:'Glycolysis', body:'Use glucose through a pathway that generates pyruvate and supports ATP production.'},
      {title:'Glycogenesis', body:'Build glycogen for storage.'},
      {title:'Glycogenolysis', body:'Break glycogen down.'},
      {title:'Gluconeogenesis', body:'Make new glucose from non-carbohydrate precursors.'}
    ],
    terms:['Glycolysis','Glycogenesis','Glycogenolysis','Gluconeogenesis'],
    remember:'lysis uses/breaks; genesis builds; neo-genesis makes new glucose.',
    sources:['https://www.ncbi.nlm.nih.gov/books/NBK560599/']
  },
  'type1-vs-type2': {
    title:'Type 1 vs Type 2 diabetes — mechanism first',
    subtitle:'Do not start by memorising age stereotypes; start with the biology.',
    parentSubjects:['Pathology','Pharmacology','Medicine','Paediatrics'],
    diagram:'type1-type2',
    plain:'Both can cause hyperglycaemia, but they reach it through different mechanisms.',
    sections:[
      {title:'Type 1 diabetes', body:'Autoimmune destruction of pancreatic beta cells leads to severe insulin deficiency. It can occur at any age, even though it commonly presents in younger people.'},
      {title:'Type 2 diabetes', body:'Insulin resistance and progressive beta-cell dysfunction combine so that insulin effect becomes inadequate for metabolic needs.'},
      {title:'Why the distinction matters', body:'Mechanism influences presentation, treatment requirements, acute risks and the way disease evolves over time.'}
    ],
    terms:['Autoimmune','Insulin deficiency','Insulin resistance','Beta-cell dysfunction'],
    remember:'Type 1: insulin-producing cells are destroyed. Type 2: insulin action becomes inadequate because resistance and beta-cell dysfunction interact.',
    sources:['https://www.niddk.nih.gov/health-information/diabetes/overview/what-is-diabetes']
  },
  'micro-vs-macrovascular': {
    title:'Microvascular vs macrovascular complications',
    subtitle:'A simple organisational map for long-term diabetes complications.',
    parentSubjects:['Pathology','Ophthalmology','Medicine'],
    diagram:'micro-macro',
    plain:'One useful first classification is whether the dominant vascular problem involves small-vessel specialised tissues or larger atherosclerotic arteries.',
    sections:[
      {title:'Microvascular', body:'Classically organised around retinopathy, diabetic kidney disease and neuropathy-related microvascular injury.'},
      {title:'Macrovascular', body:'Atherosclerotic cardiovascular disease includes coronary, cerebrovascular and peripheral arterial disease.'},
      {title:'Important caution', body:'Real complications overlap. Neuropathy, kidney disease, infection risk, wound healing and cardiovascular disease cannot all be reduced to vessel size alone.'}
    ],
    terms:['Retinopathy','Nephropathy','Neuropathy','Atherosclerosis'],
    remember:'Micro: retina, kidney, nerves. Macro: heart, brain, peripheral arteries.',
    sources:['https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems']
  },
  'diabetes-drug-map': {
    title:'Diabetes drug classes mapped to physiology',
    subtitle:'See where each class acts before learning individual drug names.',
    parentSubjects:['Pharmacology','Medicine'],
    diagram:'drug-map',
    plain:'Organise classes by target: replace insulin, change pancreatic secretion, reduce liver glucose output, improve insulin response, alter kidney glucose handling, or use incretin pathways.',
    sections:[
      {title:'Insulin', body:'Replaces or supplements insulin action directly.'},
      {title:'Metformin', body:'Organised primarily around reducing excessive hepatic glucose production and improving insulin sensitivity.'},
      {title:'Sulfonylureas', body:'Increase pancreatic insulin secretion.'},
      {title:'SGLT2 inhibitors', body:'Reduce renal glucose reabsorption so more glucose is excreted in urine.'},
      {title:'Incretin-based therapies', body:'GLP-1 receptor agonists and DPP-4 inhibitors modify incretin-related physiology in different ways.'}
    ],
    terms:['Insulin','Metformin','Sulfonylurea','SGLT2','GLP-1','DPP-4'],
    remember:'Place the class on the physiology first; memorise individual drugs second.',
    sources:['https://www.nmc.org.in/wp-content/uploads/2026/02/12bCompetencyBasedMedicalEducationCBMECurriculum12092024.pdf']
  },
  'why-insulin-is-not-a-key': {
    title:'Why “insulin is a key” is useful — and misleading',
    subtitle:'A common analogy corrected before it becomes a misconception.',
    parentSubjects:['Physiology'],
    diagram:'insulin-not-key',
    plain:'The key analogy helps communicate that insulin changes how some tissues handle glucose, but it fails if interpreted literally.',
    sections:[
      {title:'What the analogy gets right', body:'Insulin signalling can increase glucose uptake in skeletal muscle and adipose tissue by promoting GLUT4 movement to the cell membrane.'},
      {title:'What it misses', body:'The liver does not wait for insulin to “unlock” glucose entry. Insulin instead strongly regulates hepatic metabolism, including glycogen synthesis and suppression of glucose production.'},
      {title:'Better mental model', body:'Insulin is a system-wide metabolic signal that changes transport, enzyme activity, storage and production differently in different tissues.'}
    ],
    terms:['GLUT4','Insulin receptor','Hepatic glucose production'],
    remember:'Insulin is a signal, not a universal door key.',
    sources:['https://www.ncbi.nlm.nih.gov/books/NBK525983/','https://www.ncbi.nlm.nih.gov/books/NBK545201/']
  },
  'glut4-and-tissue-differences': {
    title:'Why liver, muscle and fat respond differently to insulin',
    subtitle:'One hormone, tissue-specific effects.',
    parentSubjects:['Physiology','Biochemistry'],
    diagram:'tissue-differences',
    plain:'Insulin does not produce one identical response everywhere. Each tissue has different transporters, enzymes and physiological jobs.',
    sections:[
      {title:'Skeletal muscle', body:'Insulin promotes GLUT4 translocation, increasing glucose uptake and supporting glycogen synthesis.'},
      {title:'Adipose tissue', body:'Insulin promotes GLUT4-dependent glucose uptake and favours lipid storage while suppressing lipolysis.'},
      {title:'Liver', body:'Glucose transport is regulated differently; insulin mainly shifts enzyme activity and gene expression toward storage and away from glucose production.'}
    ],
    terms:['GLUT4','Glycogen','Lipolysis'],
    remember:'Same hormone, different tissue job.',
    sources:['https://www.ncbi.nlm.nih.gov/books/NBK525983/']
  },
  'liver-vs-muscle-glycogen': {
    title:'Liver glycogen vs muscle glycogen',
    subtitle:'Stored carbohydrate serves different purposes in different tissues.',
    parentSubjects:['Biochemistry'],
    diagram:'liver-muscle-glycogen',
    plain:'Both liver and muscle store glycogen, but the stores are used for different jobs.',
    sections:[
      {title:'Liver glycogen', body:'Helps the liver support circulating glucose between meals.'},
      {title:'Muscle glycogen', body:'Primarily supports the muscle’s own energy needs during activity.'},
      {title:'Why this matters', body:'It prevents the common misconception that all glycogen stores act as one shared blood-glucose reservoir.'}
    ],
    terms:['Glycogen','Hepatic','Skeletal muscle'],
    remember:'Liver helps the blood; muscle mainly helps itself.',
    sources:['https://www.ncbi.nlm.nih.gov/books/NBK560599/']
  },
  'why-gluconeogenesis-matters': {
    title:'Why gluconeogenesis matters',
    subtitle:'How the body supports glucose availability when incoming carbohydrate is absent.',
    parentSubjects:['Biochemistry','Physiology'],
    diagram:'gluconeogenesis',
    plain:'During longer fasting, liver glycogen cannot provide glucose forever. The body therefore makes new glucose from other carbon sources.',
    sections:[
      {title:'Inputs', body:'Lactate, glycerol and glucogenic amino-acid carbon skeletons can contribute to glucose synthesis.'},
      {title:'Main sites', body:'The liver is the major site; the kidney also contributes, particularly during prolonged fasting.'},
      {title:'Hormonal context', body:'Low insulin and counter-regulatory hormonal signals favour pathways that support endogenous glucose production.'}
    ],
    terms:['Lactate','Glycerol','Glucogenic amino acids'],
    remember:'Gluconeogenesis = new glucose when stored glucose is not enough.',
    sources:['https://www.ncbi.nlm.nih.gov/books/NBK560599/']
  },
  'insulin-resistance-deep-dive': {
    title:'Insulin resistance — what does “resistant” actually mean?',
    subtitle:'A physiological definition rather than a vague label.',
    parentSubjects:['Pathology','Physiology'],
    diagram:'insulin-resistance',
    plain:'Insulin is present, but target tissues produce a smaller biological response than expected for that insulin concentration.',
    sections:[
      {title:'Muscle', body:'Reduced insulin-stimulated glucose uptake can contribute to post-meal hyperglycaemia.'},
      {title:'Liver', body:'Insulin becomes less effective at suppressing hepatic glucose production, contributing to fasting hyperglycaemia.'},
      {title:'Compensation and progression', body:'Beta cells may initially secrete more insulin. If compensation becomes insufficient, glucose levels rise further.'}
    ],
    terms:['Insulin sensitivity','Compensatory hyperinsulinaemia','Hepatic glucose production'],
    remember:'Resistance means reduced biological response, not absence of insulin.',
    sources:['https://www.niddk.nih.gov/health-information/diabetes/overview/what-is-diabetes/prediabetes-insulin-resistance']
  },
  'why-complications-are-organ-specific': {
    title:'Why diabetes complications appear in different organs',
    subtitle:'A systems view of tissue vulnerability.',
    parentSubjects:['Pathology','Medicine'],
    diagram:'organ-vulnerability',
    plain:'Persistent metabolic disturbance affects the whole body, but tissues differ in blood supply, glucose handling, cellular stress responses and capacity for repair.',
    sections:[
      {title:'Microvascular beds', body:'Retina and kidney contain specialised small-vessel networks that are particularly vulnerable to chronic metabolic and haemodynamic stress.'},
      {title:'Nerves', body:'Peripheral nerves are affected by interacting metabolic, vascular and structural mechanisms.'},
      {title:'Large arteries', body:'Diabetes accelerates atherosclerotic cardiovascular risk through multiple metabolic and vascular pathways.'}
    ],
    terms:['Microvasculature','Neuropathy','Atherosclerosis'],
    remember:'One systemic disease, different tissue vulnerabilities.',
    sources:['https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems']
  },
  'drug-class-comparison': {
    title:'How to compare diabetes drug classes without memorising a table',
    subtitle:'Use six comparison questions for every class.',
    parentSubjects:['Pharmacology'],
    diagram:'drug-comparison',
    plain:'For each class ask: where does it act, what physiological variable changes, does the effect depend on glucose, what major adverse effects matter, how is it handled by the body, and in what clinical contexts is it used?',
    sections:[
      {title:'Mechanism', body:'Identify the organ, receptor, transporter or enzyme pathway involved.'},
      {title:'Physiological consequence', body:'Translate the mechanism into what changes in glucose production, uptake, secretion, absorption or excretion.'},
      {title:'Safety and kinetics', body:'Then add adverse effects, contraindication concepts, onset/duration and elimination rather than memorising them before understanding mechanism.'}
    ],
    terms:['Pharmacodynamics','Pharmacokinetics','Contraindication','Adverse effect'],
    remember:'Target → physiological effect → kinetics → adverse effects → clinical role.',
    sources:['https://www.nmc.org.in/wp-content/uploads/2026/02/12bCompetencyBasedMedicalEducationCBMECurriculum12092024.pdf']
  },
  'why-mechanism-before-memorisation': {
    title:'Why learn mechanism before drug names?',
    subtitle:'A memory strategy for pharmacology.',
    parentSubjects:['Pharmacology'],
    diagram:'mechanism-memory',
    plain:'A drug name is easier to remember when it has a location and purpose in your mental model.',
    sections:[
      {title:'Start with physiology', body:'Identify the underlying process: excessive liver glucose output, inadequate insulin, reduced insulin response, renal glucose reabsorption, or altered incretin signalling.'},
      {title:'Attach the class', body:'Place the drug class on the process it changes.'},
      {title:'Add details later', body:'Only after the class makes sense should you layer specific drugs, kinetics, interactions and adverse effects.'}
    ],
    terms:['Mechanism of action','Drug class','Target'],
    remember:'Location and purpose first; names second.',
    sources:['https://www.nmc.org.in/wp-content/uploads/2026/02/12bCompetencyBasedMedicalEducationCBMECurriculum12092024.pdf']
  }
};

export const getDiabetesDeepLearning = (topicId) => diabetesDeepLearning[topicId] || null;
export const getDiabetesMiniTopic = (id) => diabetesMiniTopics[id] || null;
