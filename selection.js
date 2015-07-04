document.addEventListener('mouseup',function(ev){
    var selection = getSelection();
    if(selection.rangeCount > 0){
      var range = selection.getRangeAt(0);
      

      //テキストノードの事前処理
      if(range.startContainer.nodeType==Node.TEXT_NODE){
        //テキストノードをRangeの開始点の位置で2つに分ける
        range.startContainer.splitText(range.startOffset);
        //選択範囲の開始点をテキストノードの外側にする
        range.setStartAfter(range.startContainer);
      }
      //終了点についても同じ処理を行う
      if(range.endContainer.nodeType==Node.TEXT_NODE){
        //テキストノードをRangeの終了点の位置で2つに分ける
        range.endContainer.splitText(range.endOffset);
        //選択範囲の終了点をテキストノードの外側にする
        range.setEndAfter(range.endContainer);
      }
      

      var currentNode = document.body;
      //現在のノードとRangeの位置を比較するために現在のノードを表すRangeを作っておく（使いまわす）
      var currentRange= document.createRange();
      while(currentNode){
        //currentRangeは現在のノードを囲む位置にする
        currentRange.selectNode(currentNode);

        if(currentRange.compareBoundaryPoints(Range.END_TO_START,range) >= 0){
          //現在のノードがRangeより完全に後ろにある場合は終了する
          break;
        }
        if(currentRange.compareBoundaryPoints(Range.START_TO_END,range) <= 0){
          //現在のノードがRangeより完全に前にある場合は次の兄弟ノードに移動
          nextSibling();
          continue;
        }
        if(currentRange.compareBoundaryPoints(Range.START_TO_START,range) >= 0 &&
           currentRange.compareBoundaryPoints(Range.END_TO_END,range) <= 0){
          //現在のノードがRangeに完全に含まれる場合は自身を着色して次のノードに移動
          paint(currentNode);
          nextSibling();
          continue;
        }
        //そうでない場合は、現在のノードはRangeを部分的にまたは完全に含む
        if(currentNode.firstChild){
          //子ノードがある場合はそれを現在のノードにする
          currentNode=currentNode.firstChild;
        }else{
          //子がなにもない（のにRangeを含むという変な場合）
          //仕方ないので次のノードに移る
          nextSibling();
        }
      }

      //補助関数
      function paint(node){
        //要素をひとつ着色
        
        if(node.nodeType==Node.TEXT_NODE){
          //着色したい要素がテキストノードの場合はspanで囲んで着色
          var range=document.createRange();
          range.selectNode(node);
          //着色対象のnodeをspan要素に変更
          node=document.createElement("span");
          range.surroundContents(node);
        }
        
        node.style.backgroundColor="yellow";
      }
      //currentNodeを次の兄弟ノードに移動（ただしもう兄弟がいない場合は親をさかのぼって兄弟を探す）
      function nextSibling(){
        do{
          if(currentNode.nextSibling){
            currentNode=currentNode.nextSibling;
            return;
          }
        }while(currentNode=currentNode.parentNode);
        //注意：一番最後まで到達してしまった場合はcurrentNodeがnullになります
      }
    }
  },false);