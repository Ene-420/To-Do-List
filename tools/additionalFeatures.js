export const additionalFeatures = ()=>{

    function addFeats(){
        const addFeatures = ['filter', 'pencil'];
        const featDiv = document.createElement('div');
        featDiv.classList.add('additional-feats')
        addFeatures.forEach((item) =>{
            const featBtn = document.createElement('button');
            const i = document.createElement('i');

            i.classList.add('fa-solid');
            i.classList.add(`fa-${item}`);

            featBtn.classList.add(`${item}-btn`);
            featBtn.appendChild(i);

            featDiv.appendChild(featBtn);
        })
        return featDiv
    }

    return{ addFeats}
}