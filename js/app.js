const dog_api = 'https://dog.ceo/api/breeds/list'
const breeds = document.querySelector('#selectBreed')
const viewDog = document.querySelector('#viewDog')
const images = document.querySelector('#breedImage')



$.ajax({
    url: dog_api,
    dataType: 'json',
    success: (data) => {
        console.log(data)
        for (let i in data.message) {
            breeds.innerHTML +=
                `<option value="${data.message[i]}">${data.message[i]}</option>`
        }

    },


    error: function (error) {
        console.log(" ")
    }
})

viewDog.addEventListener('click', function () {
    const breedName = breeds.value;
    console.log(breedName)

    $.ajax({
        url:`https://dog.ceo/api/breed/${breedName}/images`
        ,
        dataType: 'json',
        success: (data)=>{
            console.log(data)
            images.setAttribute('src', data.message[5])

        }
    })

})

