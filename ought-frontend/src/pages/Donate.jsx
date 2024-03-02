const Donate = () => {
	return (
		<>
			<div className="px-6 py-20 tracking-wider w-full max-w-4xl mx-auto">
				<div className="mb-14">
					<h1 className="text-[#363f49] pb-8 font-semibold text-6xl">
						Donate
					</h1>
				</div>

				<div className="mb-14">
					<h2 className="text-[#363f49] pb-8 font-medium text-3xl">
						About Ought
					</h2>
					<p className="text-xl text-gray-600 font-light mb-5">
						Ought is a non-profit research lab whose mission is to
						automate and scale open-ended reasoning. Ought is
						building Elicit, a research assistant using language
						models to automate parts of researchers' workflows. For
						more information about Ought's vision, please see
						Supervise Process, not Outcomes and The Plan for Elicit.
					</p>
					<p className="text-xl text-gray-600 font-light my-5">
						We are a 501(c)(3) charitable organization. Our tax ID
						number is 81-2121304. All contributions are
						tax-deductible in the United States.
					</p>
				</div>

				<div className="mb-14">
					<h2 className="text-[#363f49] pb-8 font-medium text-3xl">
						Digital Currency
					</h2>
					<p className="mb-8 text-xl text-gray-600 font-light">
						We accept donations in Bitcoin, Ethereum, Bitcoin Cash,
						Litecoin, Dai, and USD Coin.
					</p>
					<button className="p-3 bg-[#45aab7] text-white rounded shadow">
						Donate BTC, ETH, BCH, LTC, DAI, or USDC
					</button>
					<p className="mt-8 mb-5 text-xl text-gray-600 font-light">
						If you don't need tax receipts you can also donate
						anonymously.
					</p>
				</div>

				<div className="mb-14">
					<h2 className="text-[#363f49] pb-8 font-medium text-3xl">
						Credit Card / PayPal / Bank Transfer
					</h2>
					<p className="mb-8 text-xl text-gray-600 font-light">
						If you are based in the U.S., bank transfer is our
						preferred method (lowest fees).
					</p>
				</div>

				<div className="mb-14">
					<h2 className="text-[#363f49] pb-8 font-medium text-3xl">
						Checks / Large Donations
					</h2>
					<p className="mb-8 text-xl text-gray-600 font-light">
						If you want to donate by check or wire transfer, or
						donate more than $10,000, please contact us at
						xyz@gmail.org
					</p>
				</div>
			</div>
		</>
	);
};

export default Donate;
