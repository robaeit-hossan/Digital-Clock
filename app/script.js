const clock_time = document.querySelector(".clock_time");
const clock_date = document.querySelector(".clock_date");
const clock_week = document.querySelector(".clock_week");

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

clock_time.style.color = "pink";
clock_time.style.fontSize = "2rem";
clock_time.style.fontWeight = "bold";
clock_time.style.textAlign = "center";
clock_date.style.cssText = `
    
    font-size : 20px;
    text-align : center;
`;
clock_week.style.cssText = `
display:flex;
justify-content:center;
gap:10px;
margin-top:10px;
`;
days.forEach((day) => {
  const div = document.createElement("div");
  div.textContent = day;
  div.style.cssText = `
    font-size:16px;
    color: yellow;
    border:1px solid black;
    padding:2px;
    border-radius: 5px;
    `;
  clock_week.appendChild(div);
});
const dateTime = () => {
  const d = new Date();
  const minutes = String(d.getMinutes()).padStart(2, '0');
  let hours = d.getHours();
  const second = String(d.getSeconds()).padStart(2, '0');
  let period = 'AM';
  
  if (hours >= 12) {
    period = 'PM';
    if (hours > 12) {
        hours -= 12;
    }
} else if (hours === 0) {
    hours = 12;
}

  const day = d.getDate();
  const month = String(d.getMonth()+ 1).padStart(2, '0');
  const year = d.getFullYear();
  clock_time.innerHTML = `${hours}:${minutes}:${second} ${period}`;
  clock_date.innerHTML = `${day}:${month}:${year}`;
  days.forEach((day, index) => {
    if (index === d.getDay()) {
      clock_week.children[index].style.backgroundColor = 'Black';
    } else {
      clock_week.children[index].style.color = "#33e076d8";
      clock_week.children[index].style.border = '1px solid #33e076d8';
      clock_week.children[index].style.fontWeight = 'bold';
    }
  });
};

dateTime();

setInterval(dateTime, 1000);
