const chartData = {
    labels: ["Refineries","Cigarettes/Tobacco","Bank-private"],
    data:[59.97,8.83,31.20],
   
    
};

const myChart = document.querySelector(".my-Chart");

new Chart(myChart,{
    type:"doughnut",
    data:{
        labels:chartData.labels,
        datasets:[
            {
            labels:"highest",
            data:chartData. data,
            },
    ],
    },
   options :{
    hoverBorderWidth:0,
    BorderWidth:10,
    BorderRadius:2,
    plugins :{
        legend:{
            display: false,
        },
    },
   },
});