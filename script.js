/* önce adeta css ile select işlemi yapar gibi lazım olan html elemanları seçmemiz gerek. Bunun için değişkenler oluşturup,
değişkenlerimize html'lerini atayacağız.*/

let eklemebutonu = document.getElementById('todoekle');
let liste = document.getElementById('todocontainer');
let girilendeger = document.getElementById('girilendeger');
let silbutonu = document.getElementById('todosil');
/*butonumuzu yakaladık, şimdi ona bir evetn vermemiz gerekiyor.*/ 
/*verdiğimiz event'in hemen yanına da onu takip edecek fonksiyonumuzu yazıyoruz.*/

eklemebutonu.addEventListener('click', function(){
let paragraf = document.createElement('p');
paragraf.classList.add('paragraf-styling')
liste.appendChild(paragraf);
paragraf.innerHTML = girilendeger.value;
girilendeger.value = "";

paragraf.addEventListener('click' , function(){
    paragraf.style.textDecoration = 'line-through'
    }
    )

    paragraf.addEventListener('dblclick' , function(){
        liste.removeChild(paragraf);
    })

silbutonu.addEventListener('click' , function(){
    paragraf.style.display="none";
})

})


