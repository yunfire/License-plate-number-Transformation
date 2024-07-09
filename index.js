function showLicense(){
    const inputText=$("#input-license").val().trim().toUpperCase();
    if(inputText===''){
        alert("請輸入文字後在點擊顯示按鈕")
        return;
    }
    const imageContainer=$('.license-plate-container');
    imageContainer.empty();
    for(let i=0;i<inputText.length;i++){
        const letter=inputText[i];
        const imgSrc='resource/img/車體字體-'+letter+'.png';
       
        const imgElement=$('<img>');
        const imgBox=$('<div>');
        imgBox.attr('class','license-plate-box');
        
        imgElement.attr('src', imgSrc);
        imgElement.attr('alt', letter);
        imgElement.css('margin', '5px'); // 可以根據需要調整圖片之間的間距
        imgBox.append(imgElement);
        imageContainer.append(imgBox);
    }
}