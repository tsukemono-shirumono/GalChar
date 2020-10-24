// ==UserScript==
// @name @ギャル文字スクリプト
// @namespace http://localhost/
// @include *
// @description ネタ
// ==/UserScript==

javascript:(function(){
  function traverse(elem){
    var kids = elem.childNodes;

    var kid;
    for(var a=0; a<kids.length; a++){
      kid = kids.item(a);
      if(kid.nodeType == 3){
        //kid.nodeValue = kid.nodeValue
        //  .replace("（" , "(")
        //;
          var before = "あ" ;
          var regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "ぁ " ) ;
        //
          before = "い" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "ﾚヽ " ) ;
         //
          before = "う" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "ぅ " ) ;
         //
          before = "え" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "ぇ " ) ;
         //
          before = "お" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "ぉ " ) ;
         //
          before = "か" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "ｶゝ " ) ;
          //
          before = "き" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "､ｷ " ) ;
          //
          before = "く" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "< " ) ;
          //
          before = "け" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "ﾚﾅ " ) ;
          //
          before = "こ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "⊇ " ) ;
          //
          before = "さ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "､ﾅ " ) ;
          //
          before = "し" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "ι " ) ;
          //
          before = "そ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "ξ " ) ;
          //
          before = "た" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "ﾅﾆ " ) ;
          //
          before = "つ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "⊃ " ) ;
         //
          before = "て" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "τ " ) ;
         //
          before = "と" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "─ ⊂ " ) ;
         //
          before = "な" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "ﾅょ " ) ;
         //
          before = "に" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "ﾚﾆ " ) ;
         //
          before = "の" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "@ " ) ;
         //
          before = "は" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "ﾚよ " ) ;
         //
          before = "ふ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "､ζ､ " ) ;
         //
          before = "へ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "∧ " ) ;
         //
          before = "ほ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "ﾚま " ) ;
         //
          before = "＠" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "@" ) ;
         //
          before = "み" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "ゐ " ) ;
         //
          before = "む" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "￡ヽ " ) ;
         //
          before = "や" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "ゃ " ) ;
         //
          before = "ゆ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "ゅ " ) ;
         //
          before = "よ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "ょ " ) ;
         //
          before = "り" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "丶) " ) ;
         //
          before = "る" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "ゑ " ) ;
         //
          before = "ろ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "з " ) ;
         //
          before = "わ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "ゎ " ) ;
         //
          before = "ん" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "ω " ) ;
         //
          before = "が" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , " ｶゞ " ) ;
         //
          before = "ぎ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "､ｷ″ " ) ;
         //
          before = "ぐ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "＜″ " ) ;
         //
          before = "げ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "ﾚﾅ″ " ) ;
         //
          before = "ざ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "､ﾅ″ " ) ;
         //
          before = "じ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "ι″ " ) ;
         //
          before = "ぞ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "ξ″ " ) ;
         //
          before = "ば" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "ﾚょ″ " ) ;
         //
          before = "び" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "ひ″ " ) ;
          //
          before = "ご" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "⊇″ " ) ;
          //
          before = "ぶ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "､ζ､″ " ) ;
          //
          before = "べ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "∧″ " ) ;
          //
          before = "ぼ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "ﾚま″ " ) ;
          //
          before = "ぱ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "ﾚょ° " ) ;
          //
          before = "ぴ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "ひ° " ) ;
          //
          before = "ぷ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "､ζ､° " ) ;
          //
          before = "ぺ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "∧° " ) ;
          //
          before = "ぽ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "ﾚま° " ) ;
          //
          before = "ア" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "了 " ) ;
          //
          before = "イ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "ｨ " ) ;
          //
          before = "ウ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "ｩ " ) ;
          //
          before = "エ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "工 " ) ;
          //
          before = "オ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "才 " ) ;
          //
          before = "カ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "ヵ " ) ;
          //
          before = "キ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "≠ " ) ;
          //
          before = "ク" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "勹 " ) ;
          //
          before = "ケ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "ヶ " ) ;
          //
          before = "コ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "］ " ) ;
          //
          before = "サ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "廾 " ) ;
          //
          before = "シ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , " ﾞ/ " ) ;
          //
          before = "ス" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "ｽ " ) ;
          //
          before = "セ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "ｾ " ) ;
          //
          before = "ソ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "`/ " ) ;
          //
          before = "タ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "勺  " ) ;
          //
          before = "チ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "于 " ) ;
          //
          before = "ツ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "”/ " ) ;
          //
          before = "テ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "〒 " ) ;
          //
          before = "ト" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "├ " ) ;
          //
          before = "ナ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "ﾅ " ) ;
          //
          before = "ニ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "二 " ) ;
          //
          before = "ヌ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "ﾇ " ) ;
          //
          before = "ネ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "ﾈ " ) ;
          //
          before = "ノ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "丿 " ) ;
          //
          before = "ハ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "ﾉヽ " ) ;
          //
          before = "ヒ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "t " ) ;
          //
          before = "フ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "┐ " ) ;
          //
          before = "ヘ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "∧ " ) ;
          //
          before = "ホ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "朮 " ) ;
          //
          before = "マ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "ﾏ " ) ;
          //
          before = "ミ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "彡 " ) ;
          //
          before = "メ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "乂 " ) ;
          //
          before = "モ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "ﾓ " ) ;
          //
          before = "ム" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "ﾑ " ) ;
          //
          before = "ｔ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "t" ) ;
          //
          before = "ヤ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "ﾔ " ) ;
          //
          before = "ユ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "ﾕ " ) ;
          //
          before = "ヨ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "∋ " ) ;
          //
          before = "ラ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "ﾗ " ) ;
          //
          before = "リ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "└| " ) ;
          //
          before = "ル" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "｣ﾚ " ) ;
          //
          before = "レ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "∠ " ) ;
          //
          before = "ロ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "□ " ) ;
          //
          before = "ワ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "ﾜ " ) ;
          //
          before = "ヲ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "ｦ " ) ;
          //
          before = "ン" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "･/ " ) ;
          //
          before = "ガ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "ヵ″ " ) ;
          //
          before = "ギ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "≠″ " ) ;
          //
          before = "グ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "勹″ " ) ;
          //
          before = "ゲ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , " ヶ″ " ) ;
          //
          before = "ゴ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "]″ " ) ;
          //
          before = "ザ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "廾″ " ) ;
          //
          before = "ジ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , " ﾞ/″ " ) ;
          //
          before = "ズ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "ｽ″ " ) ;
          //
          before = "ゼ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "ｾ″ " ) ;
          //
          before = "ゾ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "`/″ " ) ;
          //
          before = "ダ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "勺″ " ) ;
          //
          before = "ヂ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "于″ " ) ;
          //
          before = "バ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "ﾉヾ " ) ;
          //
          before = "ビ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "t″ " ) ;
          //
          before = "ブ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "┐″ " ) ;
          //
          before = "ベ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "∧″ " ) ;
          //
          before = "ボ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "朮″ " ) ;
          //
          before = "パ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "ﾉヽ° " ) ;
          //
          before = "ピ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "t° " ) ;
          //
          before = "プ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "┐° " ) ;
          //
          before = "ペ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "∧° " ) ;
          //
          before = "ポ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "朮° " ) ;
          //
          before = "ヅ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "”/″ " ) ;
          //
          before = "デ" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "〒″ " ) ;
          //
          before = "ド" ;
          regExp = new RegExp( before, "g" ) ;
          kid.nodeValue = kid.nodeValue.replace( regExp , "├″ " ) ;
      }else{
        if(kid.childNodes.length>0){
          traverse(kid);
        }
      }
    }
  }
  traverse(document.body);
})();
