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

    });
};

window.addEventListener('load', post);