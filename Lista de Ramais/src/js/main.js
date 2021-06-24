var selectDepartamento

function buscarRamais() {

    selectDepartamento = document.getElementById("selectDepartamento").value

    personagens.forEach(p => {
        if (selectDepartamento == p.name) {
            // document.getElementById("name").innerHTML = p.departamento
            document.getElementById("departamento").innerHTML = p.name
            document.getElementById("colaborador1").innerHTML = p.colaborador1
            document.getElementById("colaborador2").innerHTML = p.colaborador2
            document.getElementById("colaborador3").innerHTML = p.colaborador3
            document.getElementById("colaborador4").innerHTML = p.colaborador4
            document.getElementById("colaborador5").innerHTML = p.colaborador5
            document.getElementById("colaborador6").innerHTML = p.colaborador6
            document.getElementById("colaborador7").innerHTML = p.colaborador7
            document.getElementById("colaborador8").innerHTML = p.colaborador8
            document.getElementById("colaborador9").innerHTML = p.colaborador9
            document.getElementById("colaborador10").innerHTML = p.colaborador10
            document.getElementById("colaborador11").innerHTML = p.colaborador11
            document.getElementById("colaborador12").innerHTML = p.colaborador12
            document.getElementById("colaborador13").innerHTML = p.colaborador13
            document.getElementById("colaborador14").innerHTML = p.colaborador14
            document.getElementById("colaborador15").innerHTML = p.colaborador15
            document.getElementById("colaborador16").innerHTML = p.colaborador16
            document.getElementById("colaborador17").innerHTML = p.colaborador17
            document.getElementById("colaborador18").innerHTML = p.colaborador18
            document.getElementById("colaborador19").innerHTML = p.colaborador19
            document.getElementById("colaborador20").innerHTML = p.colaborador20


        }

    })
}
