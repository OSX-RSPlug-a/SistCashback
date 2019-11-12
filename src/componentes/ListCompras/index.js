/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link  } from "react-router-dom"
import Paper from "@material-ui/core/Paper";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Dashboard from "@material-ui/icons/Dashboard";
import Help from "@material-ui/icons/Help";
import AssignmentInd from "@material-ui/icons/AssignmentInd";
import MaterialTable from 'material-table';


export default function ListCompras() {
      const [state, setState] = React.useState({
        columns: [
          { title: 'Nome', field: 'nome' },
          { title: 'Codigo_vend', field: 'cod_vedd', type: 'numeric' },
          { title: 'Codigo_Produto', field: 'cod_prd', type: 'numeric' },
          { title: 'Nome_Produto', field: 'nome_prd' },
          { title: 'Quantidade', field: 'qnt', type: 'numeric' },
          { title: 'Valor/unitario', field: 'valUnit', type: 'numeric' },
          { title: 'Valor/total', field: 'valtotal', type: 'numeric' },
          { title: '% Casshback', field: 'percentCashb', type: 'numeric' },
          { title: 'Valor/Cashback', field: 'valcashb', type: 'numeric' },
          { title: 'Validação', field: 'status' },
        ],
        data: [
          { nome: 'Mirai', cod_vedd: 100112, cod_prd: 11987, nome_prd: 'Lapis de olho', qnt: 5, valUnit: 7.90, valtotal: 39.50, percentCashb: 15, valcashb: 5.00, status: 'Aprovado' },
          { nome: 'Nikki', cod_vedd: 100113, cod_prd: 12017, nome_prd: 'Perfume Puro vudu', qnt: 1, valUnit: 15.99, valtotal: 39.50, percentCashb: 10, valcashb: 5.00, status: 'Reprovado' },
        ],
        index: 0,
        routes: [
          { key: 'dashboard', title: 'Dashboard', icon: 'dashboard' },
          { key: 'help', title: 'Help', icon: 'help' },
          { key: 'usuario', title: 'AssignmentInd', icon: 'assignmentind' },
        ],
      });
    
      return (
        
        <div>

        <MaterialTable
          title="Lista | Cadastro | Alteração de produtos"
          columns={state.columns}
          data={state.data}
          editable={{
            onRowAdd: newData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  setState(prevState => {
                    const data = [...prevState.data];
                    data.push(newData);
                    return { ...prevState, data };
                  });
                }, 600);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  if (oldData) {
                    setState(prevState => {
                      const data = [...prevState.data];
                      data[data.indexOf(oldData)] = newData;
                      return { ...prevState, data };
                    });
                  }
                }, 600);
              }),
            onRowDelete: oldData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  setState(prevState => {
                    const data = [...prevState.data];
                    data.splice(data.indexOf(oldData), 1);
                    return { ...prevState, data };
                  });
                }, 600);
              }),
          }}
        />

        <Paper zDepth={1}>
          <BottomNavigation value={1} showLabels={true}>
            <BottomNavigationAction
              label="Dashboard"
              icon={<Dashboard />}
              target={<Link to='./../Dashboard' />}
            />

            <BottomNavigationAction
              label="Ajuda"
              icon={<Help />}
            />

            <BottomNavigationAction
              label="Usuario | configuratio"
              icon={<AssignmentInd />}
            />
            
          </BottomNavigation>
        </Paper>

        </div>
      );
    }
    