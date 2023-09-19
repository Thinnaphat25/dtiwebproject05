let quiz = document.getElementById('quiz')
let midterm = document.getElementById('midterm')
let final = document.getElementById('final')

let btCalSumGrade = document.getElementById('bt-calSumGrade')
let btCancel =document.getElementById('bt-cancel')

let showSum = document.getElementById('show-sum')
let showGrdae = document.getElementById('show-grade')

function calSum(){
    let sum = parseInt(quiz.value) + parseInt(midterm.value) + parseInt(final.value)
    return sum
}

function calGrade(sum){
    if(sum >= 80){
        showSum.innerHTML = '<strong>ได้คะแนนรวม' + sum + 'คะแนน<strong>'
        showGrdae.innerHTML = '<strong>ได้เกรด A</strong>'
    }else if(sum >=50){
        showSum.innerHTML = '<strong>ได้คะแนนรวม' + sum + 'คะแนน<strong>'
        showGrdae.innerHTML = '<strong>ได้เกรด A</strong>'
    }else{
        showSum.innerHTML = '<strong>ได้คะแนนรวม' + sum + 'คะแนน<strong>'
        showGrdae.innerHTML = '<strong>ได้เกรด A</strong>'

    }
}

function varidateData(){
    if(quiz.value.length == 0){
        alert('ป้อน quiz ด้วย...')
        return false
    }else if( isNaN(quiz.value) ){
        alert('ป้อน quiz เป็นตัวเลขเท่านั้น')
        return(false)
    }else if( midterm.value.length){
        alert('ป้อน midterm เป็นตัวเลขเท่านั้น')
        return(false)
    }else if( isNaN(midterm.value)){
        alert('ป้อน midtetm เป็นตัวเลขเท่านั้น')
        return(false)
    }else if( final.value.length){
        alert('ป้อน final เป็นตัวเลขเท่านั้น')
        return(false)
    }else if( isNaN(final.value) ){
        alert('ป้อน final เป็นตัวเลขเท่านั้น')
        return(false)
    }
}

btCalSumGrade.addEventListener("click",()=>{
    if(validateDate() ){
        calGrade( calSum)
    }
})
    