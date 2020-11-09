// 의문 : 왜 getelementbyid로는 안될까
const ul = document.querySelector(".userList");

// api값을 10개 가져온다.
const url = "https://randomuser.me/api/?results=15";

fetch(url)
    .then(bring => bring.json()) //데이터를 json으로 바꾼다
    .then(function(abc) {
        console.log(abc.info.results);
        
        // results는 현재 15이다.
        const users = abc.results;

        // map은 index를 순서대로 돌면서 callback함수를 실행한다. 즉, user=15이니 15번 반복
        users.map(function(user) {
            const li = document.createElement('li');
            const output = `
                <div>
                    <img src="${user.picture.large}">
                    <h3>${user.gender}</h3>
                    <h3>${user.name.title} ${user.name.first} ${user.name.last}
                    <p>${user.location.country}</p>
                    <a>${user.email}</a>
                </div>
            `;
            li.innerHTML=output;
            ul.appendChild(li);
        })
    })
    .catch(error => console.log(error));