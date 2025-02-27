import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import {EmployeesService} from '../../services/employees.service';
import {Employee} from '../../models/employe';
import {environment} from '../../../../../../environments/environment';
import {SrManagerService} from '../../../sr-manager.service';
import {EmployeFilter} from '../../../../../../@core/enum/EmployeFilter';

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class UsersListComponent implements OnInit {

    constructor(private employeService:EmployeesService ,
                private srManagerService:SrManagerService) {
    }
    ColumnMode = ColumnMode;
    employeList:Employee[];
    @ViewChild('tableRowDetails') tableRowDetails: any;
    filteredList: Employee[] = [];
    employeFilters = Object.values(EmployeFilter);
    departements: String[]= [];

    selectedFilter: string = ''; // Stocke la valeur sélectionnée

    getSelectedFilter() {
        console.log('Filtre sélectionné :', this.selectedFilter);
    }

    filterCriteria = {
        matricule: '',
        nom: '',
        departement: '',
        poste: '',
        societe:''
    };
    rowDetailsToggleExpand(row) {
        this.tableRowDetails.rowDetail.toggleExpandRow(row);
    }


    pageSize = 10;  // Define the number of rows per page
    pageOffset = 0; // Define the starting offset

    // This method will handle the page change event
    onPageChange(event: any): void {
        this.pageOffset = event.offset;
    }





    getEmployees(): Promise<any[]> {
        return new Promise((resolve, reject) => {
            this.srManagerService.getResources(environment.employees + '/getAllEmployees').subscribe(
                (response: any) => {
                    this.employeList = response;
                    this.filteredList = response;

                }, reject);
        });
    }
    getFilers(): Promise<any[]> {
        if (this.selectedFilter=="DEPARTEMENT"){
            return new Promise((resolve, reject) => {
                this.srManagerService.getResources(environment.departements + '/getNames').subscribe(
                    (response: any) => {
                        this.departements= response;
                        console.log(this.departements);
                    }, reject);
            });
        }

    }






    ngOnInit(): void {
        this.getEmployees();
    }

    filterEmployees() {
        this.filteredList = this.employeList.filter(emp =>
            (this.filterCriteria.matricule ? emp.matricule.includes(this.filterCriteria.matricule) : true) &&
            (this.filterCriteria.nom ? emp.nom.toLowerCase().includes(this.filterCriteria.nom.toLowerCase()) : true) &&
            (this.filterCriteria.departement ? emp.department.deptName.toLowerCase().includes(this.filterCriteria.departement.toLowerCase()) : true) &&
            (this.filterCriteria.poste ? emp.poste.intitule.toLowerCase().includes(this.filterCriteria.poste.toLowerCase()) : true)
        );
        this.employeList = this.filteredList;
    }
}
