const buildHTML = (XHR) => {
    const item = XHR.response.post
    const html = `
        <div class="post">
            <div class="post-date">
                投稿日時：${item.created_at}
            </div>
            <div class="post-content">
                ${item.content}
            </div>
        </div>`;
    return html;
};



function post (){
    // リクエストを送信する処理
    const submit = document.getElementById("submit"); // getElementByIdメソッドで取得した投稿ボタン要素を変数submitに格納。
    submit.addEventListener("click", (e) => { //「投稿ボタンがクリックされたこと」を認識する/ 引数の「e」はイベントオブジェクトでイベント発生時の情報をもたオブジェクト
        e.preventDefault(); // メモが重複投稿されないようにする。
        const form = document.getElementById("form"); // getElementByIdメソッドで取得したフォームの要素を変数formに格納。
        const formData = new FormData(form); // 新たに生成したFormDataオブジェクトを変数formDataに格納。
        const XHR = new XMLHttpRequest(); // 新たに生成したXMLHttpRequestオブジェクト（非同期通信のため）を変数XHRに格納。
        XHR.open("POST", "/posts", true); // open()とは、リクエストを初期化するメソッド。第一引数：HTTPメソッドの指定、第二引数：パスの指定、第三引数：非同期通信のON/OFF
        XHR.responseType = "json"; // レスポンスのデータフォーマットを指定する
        XHR.send(formData); // フォームに入力された内容をサーバー側に送信
        XHR.onload = () => { // リクエストの送信が成功したときに呼び出されるプロパティ。
            // console.log(XHR.response) -->  responseプロパティとは、サーバーからのレスポンスに関する情報が格納されたプロパティのこと。
            if (XHR.status != 200){
                alert(`Error ${XHR.status}: ${XHR.statusText}`);
                return null;
            };
            const list  = document.getElementById("list");
            const formText = document.getElementById("content")
            // const item = XHR.response.post; // レスポンスの中から投稿されたメモの情報を抽出し、変数itemに格納。
            // const html = `
            //     <div class="post">
            //         <div class="post-date">
            //             投稿日時：${item.created_at}
            //         </div>
            //         <div class="post-content">
            //             ${item.content}
            //         </div>
            //     </div>`;
            list.insertAdjacentHTML("afterend", buildHTML(XHR)); // 上のコメントアウトしている部分を関数化して返り値にhtmlを指定。
            formText.value = "";

        };
    });
};

window.addEventListener('load', post);