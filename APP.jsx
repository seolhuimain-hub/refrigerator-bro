{\rtf1\ansi\ansicpg949\cocoartf2639
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;\f1\fnil\fcharset129 AppleSDGothicNeo-Regular;\f2\fnil\fcharset0 AppleColorEmoji;
}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import React, \{ useState \} from 'react';\
\
// 
\f1 \'b5\'f0\'c0\'da\'c0\'ce\'c0\'bb
\f0  
\f1 \'c0\'a7\'c7\'d1
\f0  Tailwind CSS CDN 
\f1 \'c1\'d6\'c0\'d4
\f0  (
\f1 \'bf\'c2\'b6\'f3\'c0\'ce
\f0  
\f1 \'bf\'a1\'b5\'f0\'c5\'cd\'bf\'eb
\f0 )\
const TailwindConfig = () => (\
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />\
);\
\
export default function App() \{\
  const [ingredients, setIngredients] = useState('');\
  \
  // 
\f1 \'bf\'b9\'bd\'c3
\f0  
\f1 \'b5\'a5\'c0\'cc\'c5\'cd
\f0  (
\f1 \'b3\'aa\'c1\'df\'bf\'a1
\f0  AI API
\f1 \'bf\'cd
\f0  
\f1 \'bf\'ac\'b0\'e1\'b5\'c9
\f0  
\f1 \'ba\'ce\'ba\'d0
\f0 )\
  const [recipes, setRecipes] = useState([\
    \{\
      id: "rec_single_001",\
      title: "
\f1 \'b4\'d9
\f0  
\f1 \'b6\'a7\'b7\'c1\'b3\'d6\'b4\'c2
\f0  
\f1 \'be\'e7\'b9\'e8\'c3\'df
\f0  
\f1 \'b0\'ed\'b1\'e2
\f0  
\f1 \'c2\'f2
\f0 ",\
      mode: "
\f1 \'b4\'d9\'c0\'cc\'be\'ee\'c5\'cd
\f0  & 
\f1 \'c0\'da\'c3\'eb\'bb\'fd
\f0 ",\
      match_rate: 98,\
      description: "
\f1 \'b5\'bf\'bb\'fd\'be\'c6
\f0 , 
\f1 \'bb\'ec
\f0  
\f1 \'be\'c8
\f0  
\f1 \'c2\'ee\'b0\'ed
\f0  
\f1 \'b8\'c0\'c0\'d6\'b4\'c2
\f0  
\f1 \'b0\'c7
\f0  
\f1 \'c0\'cc\'b0\'d4
\f0  
\f1 \'c3\'d6\'b0\'ed\'be\'df
\f0 . 
\f1 \'bc\'b3\'b0\'c5\'c1\'f6\'b5\'b5
\f0  
\f1 \'b0\'c5\'c0\'c7
\f0  
\f1 \'be\'c8
\f0  
\f1 \'b3\'aa\'bf\'cd
\f0 !",\
      ingredients: \{\
        owned: ["
\f1 \'b5\'c5\'c1\'f6\'b0\'ed\'b1\'e2
\f0 ", "
\f1 \'be\'e7\'b9\'e8\'c3\'df
\f0 ", "
\f1 \'b0\'a8\'c0\'da
\f0 "],\
        missing: ["
\f1 \'b0\'a3\'c0\'e5
\f0 ", "
\f1 \'be\'cb\'b7\'ea\'b7\'ce\'bd\'ba
\f0 "],\
      \},\
      steps: [\
        "
\f1 \'b3\'bf\'ba\'f1
\f0  
\f1 \'b9\'d9\'b4\'da\'bf\'a1
\f0  
\f1 \'be\'e7\'b9\'e8\'c3\'df\'b8\'a6
\f0  
\f1 \'b5\'ce\'b2\'ae\'b0\'d4
\f0  
\f1 \'b1\'f2\'b0\'ed
\f0  
\f1 \'b1\'d7
\f0  
\f1 \'c0\'a7\'bf\'a1
\f0  
\f1 \'b0\'a8\'c0\'da\'b8\'a6
\f0  
\f1 \'be\'e3\'b0\'d4
\f0  
\f1 \'bd\'e4\'be\'ee
\f0  
\f1 \'bf\'c3\'b7\'c1
\f0 .",\
        "
\f1 \'b8\'c7
\f0  
\f1 \'c0\'a7\'bf\'a1
\f0  
\f1 \'be\'f3\'b8\'b0
\f0  
\f1 \'b5\'c5\'c1\'f6\'b0\'ed\'b1\'e2\'b8\'a6
\f0  
\f1 \'be\'f1\'b0\'ed
\f0  
\f1 \'b9\'b0
\f0  
\f1 \'b9\'dd
\f0  
\f1 \'c4\'c5\'b8\'b8
\f0  
\f1 \'ba\'ce\'be\'ee\'c1\'e0
\f0 .",\
        "
\f1 \'b6\'d1\'b2\'b1
\f0  
\f1 \'b4\'dd\'b0\'ed
\f0  
\f1 \'c1\'df\'ba\'d2\'bf\'a1\'bc\'ad
\f0  
\f1 \'b0\'ed\'b1\'e2\'b0\'a1
\f0  
\f1 \'c0\'cd\'c0\'bb
\f0  
\f1 \'b6\'a7\'b1\'ee\'c1\'f6
\f0  
\f1 \'c2\'ee\'b1\'e2\'b8\'b8
\f0  
\f1 \'c7\'cf\'b8\'e9
\f0  
\f1 \'b3\'a1\'c0\'cc\'be\'df
\f0 .",\
        "
\f1 \'b0\'a3\'c0\'e5
\f0  1
\f1 \'bd\'ba\'c7\'ac\'bf\'a1
\f0  
\f1 \'c8\'c4\'c3\'df
\f0  
\f1 \'bb\'ec\'c2\'a6
\f0  
\f1 \'bb\'d1\'b7\'c1\'bc\'ad
\f0  
\f1 \'c2\'ef\'be\'ee
\f0  
\f1 \'b8\'d4\'c0\'b8\'b8\'e9
\f0  
\f1 \'b1\'e2\'b0\'a1
\f0  
\f1 \'b8\'b7\'c8\'f9\'b4\'d9
\f0 !"\
      ],\
      bro_tip: "
\f1 \'b0\'ed\'b1\'e2
\f0  
\f1 \'b9\'d8\'bf\'a1
\f0  
\f1 \'be\'e7\'b9\'e8\'c3\'df\'b8\'a6
\f0  
\f1 \'b1\'f2\'be\'c6\'be\'df
\f0  
\f1 \'b0\'ed\'b1\'e2
\f0  
\f1 \'b1\'e2\'b8\'a7\'c0\'cc
\f0  
\f1 \'be\'e7\'b9\'e8\'c3\'df\'bf\'a1
\f0  
\f1 \'b9\'e8\'be\'ee\'bc\'ad
\f0  
\f1 \'c8\'ce\'be\'c0
\f0  
\f1 \'b8\'c0\'c0\'d6\'be\'ee
\f0  
\f1 \'c7\'fc
\f0  
\f1 \'b9\'cf\'c1\'f6
\f0 ?"\
    \}\
  ]);\
\
  return (\
    <div className="min-h-screen bg-yellow-50 p-4 sm:p-8 font-sans">\
      <TailwindConfig />\
      \
      \{/* Header */\}\
      <header className="mb-10 text-center">\
        <div className="inline-block bg-orange-500 text-white text-4xl p-3 rounded-2xl mb-4 shadow-lg">
\f2 \uc0\u55358 \u56664 
\f0 </div>\
        <h1 className="text-3xl font-black text-gray-800">
\f1 \'b3\'c3\'c0\'e5\'b0\'ed
\f0  
\f1 \'c5\'d0\'b1\'e2
\f0  
\f1 \'c7\'fc\'b4\'d4
\f0 </h1>\
        <p className="text-gray-600 mt-2 font-medium">"
\f1 \'b5\'bf\'bb\'fd\'be\'c6
\f0 , 
\f1 \'b3\'b2\'b4\'c2
\f0  
\f1 \'c0\'e7\'b7\'e1
\f0  
\f1 \'b4\'d9
\f0  
\f1 \'ba\'d2\'b7\'af\'ba\'c1
\f0 . 
\f1 \'c7\'fc\'c0\'cc
\f0  
\f1 \'b5\'fc
\f0  
\f1 \'c1\'a4\'c7\'d8\'c1\'d8\'b4\'d9
\f0 ."</p>\
      </header>\
\
      \{/* Input Section */\}\
      <div className="max-w-md mx-auto mb-12">\
        <div className="relative group">\
          <input \
            type="text" \
            value=\{ingredients\}\
            onChange=\{(e) => setIngredients(e.target.value)\}\
            placeholder="
\f1 \'b0\'a8\'c0\'da
\f0 , 
\f1 \'be\'e7\'b9\'e8\'c3\'df
\f0 , 
\f1 \'b5\'c5\'c1\'f6\'b0\'ed\'b1\'e2
\f0 ..." \
            className="w-full p-4 pr-32 rounded-2xl border-4 border-orange-200 focus:outline-none focus:border-orange-500 transition-all text-lg shadow-inner"\
          />\
          <button className="absolute right-2 top-2 bottom-2 bg-orange-500 text-white px-5 rounded-xl font-bold hover:bg-orange-600 active:scale-95 transition-all shadow-md">\
            
\f1 \'c7\'fc
\f0  
\f1 \'b5\'b5\'bf\'cd\'c1\'e0
\f0 !\
          </button>\
        </div>\
        <p className="text-center text-xs text-gray-400 mt-3 font-semibold">
\f1 \'c5\'d8\'bd\'ba\'c6\'ae
\f0 , 
\f1 \'c0\'cc\'b9\'cc\'c1\'f6
\f0 , 
\f1 \'c0\'bd\'bc\'ba
\f0  
\f1 \'b8\'f0\'b5\'ce
\f0  
\f1 \'b0\'a1\'b4\'c9\'c7\'cf\'b0\'d4
\f0  
\f1 \'b8\'b8\'b5\'e9
\f0  
\f1 \'b0\'c5\'be\'df
\f0 ! (
\f1 \'c1\'d8\'ba\'f1
\f0  
\f1 \'c1\'df
\f0 )</p>\
      </div>\
\
      \{/* Recipe List */\}\
      <div className="max-w-xl mx-auto space-y-8">\
        \{recipes.map((recipe) => (\
          <div key=\{recipe.id\} className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-orange-100 transform hover:-translate-y-1 transition-all">\
            \{/* Card Header */\}\
            <div className="p-6 bg-gradient-to-r from-orange-500 to-yellow-500 text-white flex justify-between items-center">\
              <div>\
                <span className="text-[10px] font-black bg-white text-orange-600 px-2 py-0.5 rounded-full uppercase mb-2 inline-block shadow-sm">\
                  \{recipe.mode\}\
                </span>\
                <h2 className="text-2xl font-bold tracking-tight">\{recipe.title\}</h2>\
              </div>\
              <div className="bg-white bg-opacity-20 p-2 rounded-xl text-center min-w-[70px]">\
                <p className="text-[10px] font-bold uppercase tracking-wider">
\f1 \'b8\'c5\'c4\'aa
\f0 </p>\
                <p className="text-2xl font-black">\{recipe.match_rate\}%</p>\
              </div>\
            </div>\
\
            \{/* Card Body */\}\
            <div className="p-6">\
              <div className="bg-orange-50 border-l-4 border-orange-400 p-3 mb-6 rounded-r-lg">\
                <p className="text-gray-800 font-medium italic">"\{recipe.description\}"</p>\
              </div>\
              \
              <div className="flex gap-2 mb-8">\
                <div className="flex-1 bg-gray-50 p-3 rounded-2xl">\
                  <p className="font-bold text-gray-400 text-[10px] uppercase mb-1">
\f1 \'c0\'d6\'b4\'c2
\f0  
\f1 \'c0\'e7\'b7\'e1
\f0 </p>\
                  <p className="text-gray-700 font-bold text-sm">\{recipe.ingredients.owned.join(' \'b7 ')\}</p>\
                </div>\
                <div className="flex-1 bg-red-50 p-3 rounded-2xl">\
                  <p className="font-bold text-red-300 text-[10px] uppercase mb-1">
\f1 \'c7\'ca\'bf\'e4\'c7\'d1
\f0  
\f1 \'b0\'c5
\f0 </p>\
                  <p className="text-red-700 font-bold text-sm">\{recipe.ingredients.missing.join(' \'b7 ')\}</p>\
                </div>\
              </div>\
\
              <div className="space-y-4 mb-8">\
                <p className="font-black text-gray-800 text-lg flex items-center gap-2">\
                  <span className="bg-gray-800 text-white text-xs p-1 rounded">HOW TO</span> \
                  
\f1 \'c1\'b6\'b8\'ae\'b4\'c2
\f0  
\f1 \'b5\'fc
\f0  4
\f1 \'b4\'dc\'b0\'e8\'b8\'b8
\f0 !\
                </p>\
                \{recipe.steps.map((step, index) => (\
                  <div key=\{index\} className="flex gap-4 items-start group">\
                    <span className="bg-orange-100 text-orange-600 font-black rounded-xl w-8 h-8 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-colors">\
                      \{index + 1\}\
                    </span>\
                    <p className="text-gray-700 font-medium leading-relaxed pt-1">\{step\}</p>\
                  </div>\
                ))\}\
              </div>\
\
              \{/* Bro Tip Section */\}\
              <div className="bg-blue-50 p-5 rounded-2xl border-2 border-dashed border-blue-200 relative mt-10">\
                <div className="absolute -top-4 left-6 bg-blue-500 text-white text-[10px] font-black px-3 py-1 rounded-full shadow-md">\
                  
\f1 \'c7\'fc\'b4\'d4\'c0\'c7
\f0  
\f1 \'b2\'dc\'c6\'c1
\f0 \
                </div>\
                <p className="text-blue-900 font-bold leading-relaxed">\
                  
\f2 \uc0\u55357 \u56481 
\f0  \{recipe.bro_tip\}\
                </p>\
              </div>\
            </div>\
          </div>\
        ))\}\
      </div>\
\
      <footer className="mt-20 pb-10 text-center text-gray-400 font-bold text-sm">\
        \'a9 2026 AI Agent Workflow Template Project\
      </footer>\
    </div>\
  );\
\}}