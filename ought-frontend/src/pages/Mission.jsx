const Mission = () => {
	return (
		<>
			<div className="px-6 py-20 tracking-wider w-full max-w-4xl mx-auto">
				<div className="mb-14">
					<h1 className="text-[#363f49] pb-8 font-semibold text-6xl">
						Our Mission
					</h1>
					<p className="text-xl text-gray-600 font-light">
						Our mission is to scale up good reasoning. We want ML to
						help as much with thinking and reflection as it does
						with tasks that have clear short-term outcomes.
					</p>
				</div>

				<div className="mb-14">
					<h2 className="text-[#363f49] pb-8 font-medium text-3xl">
						Likely impacts of machine learning
					</h2>
					<p className="mb-8 text-xl text-gray-600 font-light">
						In the near future, ML has the potential to reshape any
						area of life where we have clear metrics and plenty of
						data, probably mostly for the better:
					</p>
					<ul className="list-disc text-lg text-gray-600 font-light ml-10">
						<li className="mb-4">
							We'll see better automated traders, better
							recommendations for what to read or watch, as well
							as high-quality automated translation and
							text-to-speech transcription.
						</li>
						<li className="mb-4">
							We'll build control systems that require
							sophisticated world models, including self-driving
							cars, autonomous drones, and advanced industrial
							robots; but also systems that require detailed
							models of human behavior, such as apps that find
							interventions that make us happier and healthier,
							help us learn more effectively, and “help” us decide
							what stuff to buy.
						</li>
						<li className="mb-4">
							We'll have better tools for semi-automated
							programming and engineering, and for generating
							visual, audio and textual content.
						</li>
					</ul>
				</div>

				<div className="mb-14">
					<h2 className="text-[#363f49] pb-8 font-medium text-3xl">
						Where might machine learning not help by default?
					</h2>
					<p className="mb-8 text-xl text-gray-600 font-light">
						In matters of thought, it is less clear that ML can be
						of substantial help:
					</p>
					<ul className="list-disc text-lg text-gray-600 font-light ml-10">
						<li className="mb-4">
							Can it improve our understanding of the world? Can
							it help us see more clearly why some cities and
							countries prosper while others fail, why humans age,
							or how a bicycle works?
						</li>
						<li className="mb-4">
							As individuals, can it help us reflect on our
							personal goals and how to achieve them in ways that
							take into account our flaws and limitations? Can it
							help us become the kinds of people we want to be?
						</li>
						<li className="mb-4">
							As a society, can it help us make progress on the
							problems that we collectively face, such as
							efficiently aiding those most in need or
							coordinating the wishes of different groups?
						</li>
					</ul>
					<p className="mt-8 mb-5 text-xl text-gray-600 font-light">
						To a limited extent, the answer is “yes” for all of
						these. ML can reveal patterns in arbitrary data,
						including data relevant to these questions, so we should
						expect some support; and there are indirect effects such
						as automation expanding our leisure time and making our
						society run more smoothly.
					</p>
					<p className="text-xl text-gray-600 font-light">
						But will ML help substantially in matters of thought,
						reflection, and understanding? Will it help to a degree
						that rivals the way we expect it to help with driving
						cars, and beyond, ultimately resulting in superhuman
						performance? So far, there is little evidence that it
						will.
					</p>
				</div>

				<div className="mb-14">
					<h2 className="text-[#363f49] pb-8 font-medium text-3xl">
						Why might machine learning fail to help us think?
					</h2>
					<p className="mb-8 text-xl text-gray-600 font-light">
						ML works best in domains where we have well-defined
						tasks (play a game of Go) with plenty of existing data
						(train on recorded human games) and clear objectives
						(win the game). None of these are obviously present for
						supporting thinking:
					</p>
					<ul className="list-disc text-lg text-gray-600 font-light ml-10">
						<li className="mb-4">
							What is the task? How do you structure the
							interaction between a human and an ML system if the
							goal is to support the human's thinking?
						</li>
						<li className="mb-4">
							What is the data? Thinking happens mostly in our
							minds. We can record inputs and outputs, but what
							happens in between is more complex than current ML
							algorithms can infer.
						</li>
						<li className="mb-4">
							What is the objective? We don't care about thinking
							for its own sake, but because it helps us form plans
							or understand ideas that lead to better outcomes.
							This leads to sparse, delayed rewards, a setting
							that current ML algorithms are not suitable for.
						</li>
					</ul>
				</div>

				<div className="mb-14">
					<h2 className="text-[#363f49] pb-8 font-medium text-3xl">
						Why it matters
					</h2>
					<p className="text-xl text-gray-600 font-light my-5">
						Why should we want to get better at thinking in the
						first place? Here's a partial list of reasons:
					</p>
					<p className="text-xl text-gray-600 font-light my-5">
						In the{" "}
						<b className="text-black font-bold">short term</b>, many
						of the issues we care about the most—“How can I be
						healthier?” “How can I find a romantic partner?” “What
						should I do with my life?” “How can I make more money?”
						— are seriously constrained by our ability to gather the
						right information, think through relevant
						considerations, and make robust plans. We can sometimes
						get help from experts, but experts don't exist for all
						topics, tend to be expensive, and have limited time and
						ability to deeply consider individual situations.
					</p>
					<p className="text-xl text-gray-600 font-light my-5">
						In the{" "}
						<b className="text-black font-bold">medium term</b>,
						going beyond issues that can be addressed by helping
						individuals, we could probably make progress on many
						conflicts in our society if we better understood our own
						and others' values, the space of potential policies, and
						their likely consequences. While some conflicts may be
						unavoidable, it seems plausible that there is lot of
						zero-sum competition that could be replaced with
						collaboration if all sides could see how. There's a
						positive vision of the future where broadly accessible
						cognitive technology is the tide that lifts all boats
						and allows us to make considered decisions together.
					</p>
					<p className="text-xl text-gray-600 font-light my-5">
						In the <b className="text-black font-bold">long term</b>
						, it's difficult to see a path where we make good use of
						our cosmic endowment — the long future ahead, the vast
						space available — without figuring out how to leverage
						AI to get better at reflecting about what we want things
						to be like, and how to get there. There may always
						remain some fundamental uncertainty about what we truly
						value the most, but it does seem that not all of our
						value judgments are created equal. Reflecting on our
						options and plans does tend to help. If the space of
						possibilities is really big, we'll need to improve
						beyond our current abilities, eventually.
					</p>
				</div>
			</div>
		</>
	);
};

export default Mission;
