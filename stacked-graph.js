const cars = [
  '2022-06-30', 'Direct',     '35',         '2022-06-30', 'CHenkel101', '821', '2022-06-30', 'OMigacz101', '105',        '2022-06-30',
  'EKay101',    '2162',       '2022-06-30', 'MOuch101',   '2598',
  '2022-06-30', 'JLin103',    '580',        '2022-06-29', 'JLin103',
  '6258',       '2022-06-29', 'CHenkel101', '9373',       '2022-06-29',
  'Direct',     '162',        '2022-06-29', 'OMigacz101', '1743',
  '2022-06-29', 'MOuch101',   '17832',      '2022-06-29', 'EKay101',
  '18766',      '2022-06-28', 'JLin103',    '6291',       '2022-06-28',
  'EKay101',    '21356',      '2022-06-28', 'CHenkel101', '11011',
  '2022-06-28', 'OMigacz101', '1627',       '2022-06-28', 'MOuch101',
  '19471',      '2022-06-27', 'CHenkel101', '4917',       '2022-06-27',
  'MOuch101',   '21414',      '2022-06-27', 'EKay101',    '27809',
  '2022-06-27', 'JLin103',    '6426',       '2022-06-27', 'OMigacz101',
  '1962',       '2022-06-26', 'EKay101',    '31099',      '2022-06-26',
  'MOuch101',   '21526',      '2022-06-26', 'JLin103',    '5400',
  '2022-06-26', 'CHenkel101', '5821',       '2022-06-26', 'OMigacz101',
  '615',        '2022-06-25', 'JLin103',    '8493',       '2022-06-25',
  'MOuch101',   '28499',      '2022-06-25', 'CHenkel101', '6022'
];
let json = [{
  "date": "Jun 2022",
  "Creator": "ASmith",
  "f0_": "12353"
}, {
  "date": "Jun 2022",
  "Creator": "TJames",
  "f0_": "8333"
}, {
  "date": "Jun 2022",
  "Creator": "CTejero",
  "f0_": "5806"
}, {
  "date": "Jun 2022",
  "Creator": "AMei",
  "f0_": "8545"
}, {
  "date": "Jun 2022",
  "Creator": "PAlmond",
  "f0_": "3821"
}, {
  "date": "Jun 2022",
  "Creator": "KTrofimova",
  "f0_": "5108"
}, {
  "date": "May 2022",
  "Creator": "CTejero",
  "f0_": "18724"
}, {
  "date": "May 2022",
  "Creator": "PAlmond",
  "f0_": "187716"
}, {
  "date": "May 2022",
  "Creator": "TJames",
  "f0_": "47961"
}, {
  "date": "May 2022",
  "Creator": "ASmith",
  "f0_": "119806"
}, {
  "date": "May 2022",
  "Creator": "AMei",
  "f0_": "379697"
}, {
  "date": "May 2022",
  "Creator": "KTrofimova",
  "f0_": "109760"
}, {
  "date": "Apr 2022",
  "Creator": "PAlmond",
  "f0_": "296154"
}, {
  "date": "Apr 2022",
  "Creator": "AMei",
  "f0_": "140659"
}, {
  "date": "Apr 2022",
  "Creator": "KTrofimova",
  "f0_": "599837"
}, {
  "date": "Apr 2022",
  "Creator": "MSiddiqui",
  "f0_": "165985"
}, {
  "date": "Apr 2022",
  "Creator": "ZColes",
  "f0_": "137263"
}, {
  "date": "Mar 2022",
  "Creator": "MSiddiqui",
  "f0_": "317543"
}, {
  "date": "Mar 2022",
  "Creator": "PAlmond",
  "f0_": "830750"
}, {
  "date": "Mar 2022",
  "Creator": "KTrofimova",
  "f0_": "95141"
}, {
  "date": "Mar 2022",
  "Creator": "ZColes",
  "f0_": "53751"
}, {
  "date": "Mar 2022",
  "Creator": "AMei",
  "f0_": "174272"
}, {
  "date": "Mar 2022",
  "Creator": "SDavisworth",
  "f0_": "175237"
}, {
  "date": "Mar 2022",
  "Creator": "SHarowitz",
  "f0_": "0"
}, {
  "date": "Feb 2022",
  "Creator": "AMei",
  "f0_": "95108"
}, {
  "date": "Feb 2022",
  "Creator": "PAlmond",
  "f0_": "814017"
}, {
  "date": "Feb 2022",
  "Creator": "SDavisworth",
  "f0_": "75711"
}, {
  "date": "Feb 2022",
  "Creator": "SHarowitz",
  "f0_": "528488"
}, {
  "date": "Jan 2022",
  "Creator": "PAlmond",
  "f0_": "543621"
}, {
  "date": "Jan 2022",
  "Creator": "AMei",
  "f0_": "224305"
}, {
  "date": "Jan 2022",
  "Creator": "SHarowitz",
  "f0_": "68451"
}, {
  "date": "Jan 2022",
  "Creator": "SDavisworth",
  "f0_": "16703"
}, {
  "date": "Jan 2022",
  "Creator": "SMei",
  "f0_": "334594"
}, {
  "date": "Jan 2022",
  "Creator": "CLondon",
  "f0_": "0"
}, {
  "date": "Jan 2022",
  "Creator": "ASmith",
  "f0_": "0"
}, {
  "date": "Dec 2021",
  "Creator": "CLondon",
  "f0_": "65085"
}, {
  "date": "Dec 2021",
  "Creator": "SHarowitz",
  "f0_": "432436"
}, {
  "date": "Dec 2021",
  "Creator": "ASmith",
  "f0_": "312129"
}, {
  "date": "Dec 2021",
  "Creator": "SDavisworth",
  "f0_": "78291"
}, {
  "date": "Dec 2021",
  "Creator": "PAlmond",
  "f0_": "254215"
}, {
  "date": "Dec 2021",
  "Creator": "JJeine",
  "f0_": "33811"
}, {
  "date": "Dec 2021",
  "Creator": "WRen",
  "f0_": "107666"
}, {
  "date": "Dec 2021",
  "Creator": "Dir",
  "f0_": "111344"
}, {
  "date": "Dec 2021",
  "Creator": "FOlagunju",
  "f0_": "10244"
}, {
  "date": "Dec 2021",
  "Creator": "TVillanueva",
  "f0_": "40365"
}, {
  "date": "Dec 2021",
  "Creator": "AMei",
  "f0_": "46480"
}, {
  "date": "Dec 2021",
  "Creator": "AJohnson",
  "f0_": "3095"
}, {
  "date": "Dec 2021",
  "Creator": "CDiez",
  "f0_": "28829"
}, {
  "date": "Dec 2021",
  "Creator": "LReilly",
  "f0_": "45672"
}, {
  "date": "Nov 2021",
  "Creator": "Dir",
  "f0_": "72024"
}, {
  "date": "Nov 2021",
  "Creator": "LReilly",
  "f0_": "31739"
}, {
  "date": "Nov 2021",
  "Creator": "SDavisworth",
  "f0_": "115329"
}, {
  "date": "Nov 2021",
  "Creator": "SHarowitz",
  "f0_": "287118"
}, {
  "date": "Nov 2021",
  "Creator": "PAlmond",
  "f0_": "54478"
}, {
  "date": "Nov 2021",
  "Creator": "TVillanueva",
  "f0_": "187030"
}, {
  "date": "Nov 2021",
  "Creator": "ASmith",
  "f0_": "80840"
}, {
  "date": "Nov 2021",
  "Creator": "AJohnson",
  "f0_": "13475"
}, {
  "date": "Nov 2021",
  "Creator": "AMei",
  "f0_": "143369"
}, {
  "date": "Nov 2021",
  "Creator": "CDiez",
  "f0_": "81478"
}, {
  "date": "Nov 2021",
  "Creator": "JJeine",
  "f0_": "72716"
}, {
  "date": "Nov 2021",
  "Creator": "WRen",
  "f0_": "62838"
}, {
  "date": "Oct 2021",
  "Creator": "CDiez",
  "f0_": "62189"
}, {
  "date": "Oct 2021",
  "Creator": "TVillanueva",
  "f0_": "90873"
}, {
  "date": "Oct 2021",
  "Creator": "AMei",
  "f0_": "96864"
}, {
  "date": "Oct 2021",
  "Creator": "Dir",
  "f0_": "14959"
}, {
  "date": "Oct 2021",
  "Creator": "SDavisworth",
  "f0_": "9745"
}, {
  "date": "Oct 2021",
  "Creator": "LReilly",
  "f0_": "11688"
}, {
  "date": "Oct 2021",
  "Creator": "AJohnson",
  "f0_": "26200"
}, {
  "date": "Oct 2021",
  "Creator": "PAlmond",
  "f0_": "14601"
}, {
  "date": "Oct 2021",
  "Creator": "SHarowitz",
  "f0_": "47078"
}]

let sampleArr = []
let bubble = []
for(let i = 0; i < json.length; i++){
  sampleArr.push(json[i].date)
  sampleArr.push(json[i].Creator)
  sampleArr.push(json[i].f0_)
}

let dates = []
let names = []
let values = []
let group = []
function groupArr(data) {
    for (var i = 0, x = 0; i < data.length; i++) {
        if (x === 0) {
         dates.push(data[i]) 
          x++
        } else if (x === 1){
         names.push(data[i])
          x++
        } else if (x === 2) {
         values.push(data[i])
          x=0
        }
    }
    let n = 3
    for (var i = 0, j = 0; i < data.length; i++) {
        if (i >= n && i % n === 0)
            j++;
        group[j] = group[j] || [];
        group[j].push(data[i])
    }
 creator(names)
  
}
function creator(names){
  // for (var i = 0; i < arr.length; i++) {
  //   if(names[0] !== names[i] || i === 0){
  //     bubble.push(names[i]);
  //   }else{
  //     return
  //   }
  // }

  // distinct names
 bubble = names.filter((item, i, ar) => ar.indexOf(item) === i)
  
}

// ALL I need for Bubble Plugin
let formattedDates = ["Jun 2022", "May 2022", "Apr 2022", "Mar 2022", "Feb 2022", "Jan 2022", "Dec 2021", "Nov 2021", "Oct 2021"]

function filtering(names,group){
  let x = names.length
    let q = 0 //counter for date array
  let bh = []
  //start of for loop for bubble transformation
  for (let i = 0, j =0; i < group.length; i++){
    let mk = {}
    // console.log(group[i][1])
    if (bh.length > 0){
      for( let k = 0; k < bh.length; k++){
         let newArr = []
         if(bh[k].creator === group[i][1]){
           bh[k].date.push(group[i][0])
           bh[k].val.push(group[i][2])
            
           break
        } 
         else if (k === bh.length - 1 && bh[k].creator !== group[i][1]) {
          mk.creator = group[i][1]
          mk.date = [group[i][0]]
          mk.val = [group[i][2]]
          bh.push(mk)
           break
        }
      }
    } 
    else {
      mk.creator = group[i][1]
      mk.date = [group[i][0]]
      mk.val = [group[i][2]]
      bh.push(mk)
    }
  }
  return bh 

}
groupArr(sampleArr)

let c = filtering(bubble,group)
let results = []
for(let i = 0; i < c.length; i++){
  let obj = {
    label: c[i].creator,
    data: [...c[i].val],
    fill:true
  }
  results.push(obj)
}

c.forEach((element,index) =>{
  let lengthOfArr = element.date.length
  console.log(lengthOfArr)
  for(let i=0,x=0; i < formattedDates.length; i++){
    if(element.date[i] !== formattedDates[i]){
      element.date.splice(i, 0, formattedDates[i])
      element.val.splice(i, 0, undefined)

      // console.log(element.date.join())
      // element.date = op
    } 
  }
  console.log(element)
})

