var myModal = new bootstrap.Modal(document.getElementById('janela'));
    var btn1 = document.getElementById('btn1');
    var btn2 = document.getElementById('btn2');
    var btn3 = document.getElementById('btn3');
    var btn4 = document.getElementById('btn4');
    var btn5 = document.getElementById('btn05');
    var btn6 = document.getElementById('btn6');
        var cont1 = 'Nosso Erp para Confecção ajuda grandes confecções no Brasil a serem mais eficientes e rentáveis, veja como sua confecção pode ser ágil e eficiente, controle sua empresa desde a formação do preço de venda, entrada de pedidos , monitore todos os processos para elaboração da peça final como corte, enfesto, facções e expedição.'
        var cont2 = 'Nosso sistema ERP é ideal para lojas que exigem controle e praticidade, permite o controle de varias lojas permitindo separar estoque por filial, controlar movimento financeiro consolidado ou separado por loja de maneira pratica e eficiente, é possível fazer integração com fabricas, funciona na Nuvem ou local'
        var cont3 = 'Nosso sistema ERP para distribuidoras fornece soluções práticas para gestão diária de uma distribuidora, como automação da digitação de pedidos, controle financeiro, rotas de entrega, controle financeiro total, gestão do estoque, automação do faturamento, alem dos complicados cálculos de ICMS substituto.'
        var cont4 = 'RZ CAD Têxtil é o CAD para confecção ideal, tem a melhor relação custo benefício do mercado, possui praticamente todas as funções dos Softwares concorrentes como Audaces Vestuário, Lectra e Gerber, por um preço mais acessível, além disso ele é desenvolvido 100% no Brasil.'
        var cont5 = 'A RZ Sistemas fornece Plotters para confecção, a linha Rz Textil Jet compatível com Rz CAD, Audaces, Optitex, Lectra, Gerber, temos diversos modelos com velocidades e tamanhos diferentes. A linha Rz Têxtil Jet BR possui modelos com cabeças de impressão de: 120cm, 160cm, 185cm e 220cm.'
        var cont6 = 'Vender a pronta entrega requer mais que apenas um solução eficiente de força de vendas, requer a gerencia de todo o processo para controle de estoque, geração de notas fiscais de transferência e devolução dos caminhões ou vendedores, alem da emissão da nota fiscal para o cliente final.'
        btn1.addEventListener('click', abrir1);
        btn2.addEventListener('click', abrir2);
        btn3.addEventListener('click', abrir3);
        btn4.addEventListener('click', abrir4);
        btn6.addEventListener('click', abrir5);
        btn5.addEventListener('click', abrir6);
        var mtxt = document.getElementById('txtmodal');
        mtxt.textContent = '';
        function abrir1(){
            myModal.show();
            mtxt.textContent = '';
            var n1 = document.createElement('p');
                n1.textContent = cont1;
                document.getElementById('txtmodal').appendChild(n1);
               
        }

        function abrir2(){
            myModal.show();
            mtxt.textContent = '';
            var n1 = document.createElement('p');
                n1.textContent = cont2;
               mtxt.appendChild(n1);
        }
        function abrir3(){
            myModal.show();
            mtxt.textContent = '';
            var n1 = document.createElement('p');
                n1.textContent = cont3;
                document.getElementById('txtmodal').appendChild(n1);
        }
        function abrir4(){
            myModal.show();
            mtxt.textContent = '';
            var n1 = document.createElement('p');
                n1.textContent = cont4;
               mtxt.appendChild(n1);
        }
        function abrir5(){
            myModal.show();
            mtxt.textContent = '';
            var n1 = document.createElement('p');
                n1.textContent = cont5;
                mtxt.appendChild(n1);
        }
        function abrir6(){
            myModal.show();
            mtxt.textContent = '';
            var n1 = document.createElement('p');
                n1.textContent = cont6;
                mtxt.appendChild(n1);
        }
        var rmv1 = document.getElementById('rmv1');
        var rmv2 = document.getElementById('rmv2');
        var rmv3 = document.getElementById('rmv3');
        var rmv4 = document.getElementById('rmv4');
        var rmv5 = document.getElementById('rmv5');
        var rmv6 = document.getElementById('rmv6');

            rmv1.addEventListener('click',remover1);
            rmv2.addEventListener('click',remover2);
            rmv3.addEventListener('click',remover3);
            rmv4.addEventListener('click',remover4);
            rmv5.addEventListener('click',remover5);
            rmv6.addEventListener('click',remover6);
                var g1 = document.getElementById('g1');
                var g2 = document.getElementById('g2');
                var g3 = document.getElementById('g3');
                var g4 = document.querySelector('#g4');
                var g5 = document.getElementById('g5');
                var g6 = document.getElementById('g6'); 

            function remover1(){
                g1.textContent = '';
                var g1vol = document.createElement('button');
                g1vol.textContent = 'restaurar'
                g1.appendChild(g1vol);
                g1vol.addEventListener('click', restaurar);
                function restaurar(){
                    g1.innerHTML = ` <img src="./img/erp-para-confeccao-icon.svg" class="rzimg">
              <h2>Erp para Confecção</h2>
              <p>Nosso Erp para Confecção ajuda grandes confecções no Brasil a serem mais eficientes e rentáveis, veja como sua confecção pode ser ágil e eficiente, controle sua empresa desde a formação do preço de venda, entrada de pedidos , monitore todos os processos para elaboração da peça final como corte, enfesto, facções e expedição.</p>
                <button id="btn1" class="card-link" data-toggle="modal" data-target="janela">informações</button>
                <button id="rmv1">Remover</button>`
                var btn1 = document.getElementById('btn1');
                    btn1.addEventListener('click', abrir1);
                }
            }
            function remover2(){
                g2.textContent ='';
                var g2vol = document.createElement('button');
                g2vol.textContent = 'restaurar';
                g2.appendChild(g2vol);
                g2vol.addEventListener('click', restaurar2);
                function restaurar2(){
                    g2.innerHTML = `<img src="./img/erp-rede-de-lojas-icon.svg" class="rzimg" class="linha1">
             <h2>Erp para Lojas</h2>
             <p>Nosso sistema ERP é ideal para lojas que exigem controle e praticidade, permite o controle de varias lojas permitindo separar estoque por filial, controlar movimento financeiro consolidado ou separado por loja de maneira pratica e eficiente, é possível fazer integração com fabricas, funciona na Nuvem ou local.</p>
                <button id="btn2">Informações</button>
                <button id="rmv2">remover</button>`
                var btn2 = document.getElementById('btn2');
                    btn2.addEventListener('click', abrir2);
                }
            }
            function remover3(){
                g3.textContent ='';
                var g3vol = document.createElement('button');
                g3vol.textContent = 'restaurar';
                g3.appendChild(g3vol);
                g3vol.addEventListener('click', restaurar3);
                function restaurar3(){
                    g3.innerHTML = ` <img src="./img/sistema-para-distribuidoras-icon.svg" class="rzimg" class="linha1">
              <h2>Sistema para Distribuidoras</h2>
              <p>Nosso sistema ERP para distribuidoras fornece soluções práticas para gestão diária de uma distribuidora, como automação da digitação de pedidos, controle financeiro, rotas de entrega, controle financeiro total, gestão do estoque, automação do faturamento, alem dos complicados cálculos de ICMS substituto.</p>
                <button id="btn3">informações</button>
                <button id="rmv3">remover</button>`
                var btn3 = document.getElementById('btn3');
                    btn3.addEventListener('click', abrir3);
                }
            }
            function remover4(){
                g4.textContent ='';
                var g4vol = document.createElement('button');
                g4vol.textContent = 'restaurar';
                g4.appendChild(g4vol);
                g4vol.addEventListener('click', restaurar4);
                function restaurar4(){
                g4.innerHTML = `
               <img src="./img/cad-para-confeccao-icon.svg" class="rzimg">
               <h2>CAD para Confecções</h2>
                 <p>RZ CAD Têxtil é o CAD para confecção ideal, tem a melhor relação custo benefício do mercado, possui praticamente todas as funções dos Softwares concorrentes como Audaces Vestuário, Lectra e Gerber, por um preço mais acessível, além disso ele é desenvolvido 100% no Brasil.</p>
                 <button id="btn4"> Informações</button>
                 <button id="rmv4">remover</button>`
                var btn4 = document.getElementById('btn4');
                    btn4.addEventListener('click', abrir4);
                }
            }
        
            function remover5(){
                g5.textContent ='';
                var g5vol = document.createElement('button');
                g5vol.textContent = 'restaurar';
                g5.appendChild(g5vol);
                g5vol.addEventListener('click', restaurar5);
                function restaurar5(){
                    g5.innerHTML = `<img class="rzimg" src="./img/plotter-para-confeccao-icon.svg">
                    <h2>Plotter para Confecção</h2>
              <p>A RZ Sistemas fornece Plotters para confecção, a linha Rz Textil Jet compatível com Rz CAD, Audaces, Optitex, Lectra, Gerber, temos diversos modelos com velocidades e tamanhos diferentes. A linha Rz Têxtil Jet BR possui modelos com cabeças de impressão de: 120cm, 160cm, 185cm e 220cm.</p>
                <button id="btn05">informações</button>
                <button id="rmv5">remover</button>`
                var btn5 = document.getElementById('btn05');
                    btn5.addEventListener('click', abrir5);
                }
            }
            function remover6(){
                g6.textContent ='';
                var g6vol = document.createElement('button');
                g6vol.textContent = 'restaurar';
                g6.appendChild(g6vol);
                g6vol.addEventListener('click', restaurar6);
                }
                function restaurar6(){
                    g6.innerHTML = ` <img src="./img/venda-a-pronta-entrega-icon.svg" class="rzimg">
              <h2>Venda a Prontra Entrega</h2>
              <p>Vender a pronta entrega requer mais que apenas um solução eficiente de força de vendas, requer a gerencia de todo o processo para controle de estoque, geração de notas fiscais de transferência e devolução dos caminhões ou vendedores, alem da emissão da nota fiscal para o cliente final.</p>
                <button id="btn6">informações</button>
                <button id="rmv6">remover</button>`
                var btn6 = document.getElementById('btn6');
                    btn6.addEventListener('click', abrir6);
                 var rmv6 = window.document.getElementById('rvm6');   
              }
                 rmv6.addEventListener('click', remover6);
 