function ExecuteScript() 
{ 
    console.log('Executando script!');
    
    let element = document.getElementsByTagName('tbody')[0];

    let rows = element.getElementsByTagName('tr');
    let objs = [];

    for(let i = 0; i < rows.length; i++)
    {
        let row = rows[i];
        let columns = row.getElementsByTagName('td');
        let company = 
        {
            name : '',
            icon : ''
        };

        for(let j = 0; j < columns.length; j++)
        {
            let column = columns[j];

            switch(j)
            {
                //Empresa
                case 0:
                    try
                    {
                        company.name = column.children[0].innerHTML;
                    }
                    catch(e) { break; }
                    break;
                //Imagem
                case 5:
                    try
                    {
                        company.icon = column.children[0].getAttribute('href');
                    }
                    catch(e) { break; }
                    break;
                
                //Nenhum desses acima.
                default: break;
            }
        }

        objs.push(company);
    }

    console.log(JSON.stringify(objs) );

    return JSON.stringify(objs);
}