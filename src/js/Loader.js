let loader = (function(){

    let addItem = () =>{
        const rootApp = document.getElementById("root");
        const textDoc = document.createElement("div");
        rootApp.appendChild(textDoc);
        const mainDiv = document.getElementsByTagName("div")[1];
        const attributeCreate = document.createAttribute("class");
        attributeCreate.value = "Test";
        mainDiv.setAttributeNode(attributeCreate);
        rootApp.appendChild(textDoc);
    }

    return{
        addItem : addItem
    }

})();

export default loader;