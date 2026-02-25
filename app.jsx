// 맨 위 import React... 문장은 지워야 해! 브라우저가 직접 읽을 때는 에러가 나.

function App() {
    const [ingredients, setIngredients] = React.useState(''); // useState 앞에 React. 붙이기

    const [recipes, setRecipes] = React.useState([
        {
            id: "rec_single_001",
            title: "다 때려넣는 양배추 고기 찜",
            mode: "다이어터 & 자취생",
            match_rate: 98,
            description: "동생아, 살 안 찌고 맛있는 건 이게 최고야. 설거지도 거의 안 나와!",
            ingredients: {
                owned: ["돼지고기", "양배추", "감자"],
                missing: ["간장", "알룰로스"],
            },
            steps: [
                "냄비 바닥에 양배추를 두껍게 깔고 그 위에 감자를 얇게 썰어 올려.",
                "맨 위에 얼린 돼지고기를 얹고 물 반 컵만 부어줘.",
                "뚜껑 닫고 중불에서 고기가 익을 때까지 찌기만 하면 끝이야.",
                "간장 1스푼에 후추 살짝 뿌려서 찍어 먹으면 기가 막힌다!"
            ],
            bro_tip: "고기 밑에 양배추를 깔아야 고기 기름이 양배추에 배어서 훨씬 맛있어 형 믿지?"
        }
    ]);

    return (
        <div className="min-h-screen bg-yellow-50 p-4 sm:p-8 font-sans">
            {/* Header */}
            <header className="mb-10 text-center">
                <div className="inline-block bg-orange-500 text-white text-4xl p-3 rounded-2xl mb-4 shadow-lg">🥘</div>
                <h1 className="text-3xl font-black text-gray-800">냉장고 털기 형님</h1>
                <p className="text-gray-600 mt-2 font-medium">"동생아, 남는 재료 다 불러봐. 형이 딱 정해준다."</p>
            </header>

            {/* Input Section */}
            <div className="max-w-md mx-auto mb-12">
                <div className="relative group">
                    <input
                        type="text"
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        placeholder="감자, 양배추, 돼지고기..."
                        className="w-full p-4 pr-32 rounded-2xl border-4 border-orange-200 focus:outline-none focus:border-orange-500 transition-all text-lg shadow-inner"
                    />
                    <button className="absolute right-2 top-2 bottom-2 bg-orange-500 text-white px-5 rounded-xl font-bold hover:bg-orange-600 active:scale-95 transition-all shadow-md">
                        형 도와줘!
                    </button>
                </div>
                <p className="text-center text-xs text-gray-400 mt-3 font-semibold">텍스트, 이미지, 음성 모두 가능하게 만들 거야! (준비 중)</p>
            </div>

            {/* Recipe List */}
            <div className="max-w-xl mx-auto space-y-8">
                {recipes.map((recipe) => (
                    <div key={recipe.id} className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-orange-100 transform hover:-translate-y-1 transition-all">
                        <div className="p-6 bg-gradient-to-r from-orange-500 to-yellow-500 text-white flex justify-between items-center">
                            <div>
                                <span className="text-[10px] font-black bg-white text-orange-600 px-2 py-0.5 rounded-full uppercase mb-2 inline-block shadow-sm">
                                    {recipe.mode}
                                </span>
                                <h2 className="text-2xl font-bold tracking-tight">{recipe.title}</h2>
                            </div>
                            <div className="bg-white bg-opacity-20 p-2 rounded-xl text-center min-w-[70px]">
                                <p className="text-[10px] font-bold uppercase tracking-wider">매칭</p>
                                <p className="text-2xl font-black">{recipe.match_rate}%</p>
                            </div>
                        </div>

                        <div className="p-6">
                            <div className="bg-orange-50 border-l-4 border-orange-400 p-3 mb-6 rounded-r-lg">
                                <p className="text-gray-800 font-medium italic">"{recipe.description}"</p>
                            </div>

                            <div className="flex gap-2 mb-8">
                                <div className="flex-1 bg-gray-50 p-3 rounded-2xl">
                                    <p className="font-bold text-gray-400 text-[10px] uppercase mb-1">있는 재료</p>
                                    <p className="text-gray-700 font-bold text-sm">{recipe.ingredients.owned.join(' · ')}</p>
                                </div>
                                <div className="flex-1 bg-red-50 p-3 rounded-2xl">
                                    <p className="font-bold text-red-300 text-[10px] uppercase mb-1">필요한 거</p>
                                    <p className="text-red-700 font-bold text-sm">{recipe.ingredients.missing.join(' · ')}</p>
                                </div>
                            </div>

                            <div className="space-y-4 mb-8">
                                <p className="font-black text-gray-800 text-lg flex items-center gap-2">
                                    <span className="bg-gray-800 text-white text-xs p-1 rounded">HOW TO</span>
                                    조리는 딱 4단계만!
                                </p>
                                {recipe.steps.map((step, index) => (
                                    <div key={index} className="flex gap-4 items-start group">
                                        <span className="bg-orange-100 text-orange-600 font-black rounded-xl w-8 h-8 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                                            {index + 1}
                                        </span>
                                        <p className="text-gray-700 font-medium leading-relaxed pt-1">{step}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-blue-50 p-5 rounded-2xl border-2 border-dashed border-blue-200 relative mt-10">
                                <div className="absolute -top-4 left-6 bg-blue-500 text-white text-[10px] font-black px-3 py-1 rounded-full shadow-md">
                                    형님의 꿀팁
                                </div>
                                <p className="text-blue-900 font-bold leading-relaxed">
                                    💡 {recipe.bro_tip}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <footer className="mt-20 pb-10 text-center text-gray-400 font-bold text-sm">
                © 2026 AI Agent Workflow Template Project
            </footer>
        </div>
    );
}