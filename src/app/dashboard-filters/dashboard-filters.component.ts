import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard-filters',
  templateUrl: './dashboard-filters.component.html',
  styleUrls: ['./dashboard-filters.component.css']
})
export class DashboardFiltersComponent {
  constructor(private title: Title) {}

	ngOnInit() {
		this.title.setTitle('Dashboard filters');
	}
	
	selectedOrganisation: String = "--Choose Organisation--";
  
	organisations: Array<any> = [
		{ name: 'Development', department: [ {name:  ['Dot Net', 'Java', 'Open-Source'], designations: ['Project Manager', 'Project Lead', 'Team Lead','Senior software developer','Software developer']} ] },
		{ name: 'Testing', department: [ {name: ['Automatic', 'Manual', 'Power tester'], designations: ['Project Manager', 'Project Lead', 'Team Lead','Senior software Tester','Software Tester']} ] },
		{ name: 'Facility', department: [ {name: ['System Admin', 'House keeping', 'Cafeteria management'], designations: ['grade 1','grade 2','grade 3']} ] },
		{ name: 'Management', department: [ {name: '', designations: ['Puebla']} ] },
		{ name: 'Security', department: [ {name: 'E', designations: ['Delhi', 'Kolkata', 'Mumbai', 'Bangalore']} ] },
	];
  
    //states: Array<any>; //Angular 8
	department: Array<any> = []; //Angular 11

	//cities: Array<any>; //Angular 8
	designations: Array<any> = []; //Angular 11
	
	//changeCountry(country) { //Angular 8
	changeOrganisation(organisations: any) { //Angular 11
		//this.states = this.Countries.find(cntry => cntry.name == country).states; //Angular 8
		this.department = this.organisations.find((org: any) => org.name == organisations.target.value).department; //Angular 11
	}

	//changeState(state) { //Angular 8
	changeDepartment(department: any) { //Angular 11
		//this.cities = this.Countries.find(cntry => cntry.name == this.selectedCountry).states.find(stat => stat.name == state).cities; //Angular 8
		this.designations = this.organisations.find((organisation: any) => organisation.name == this.selectedOrganisation).department.find((stat: any) => stat.name ==department.target.value).designations; //Angular 11
	}
	
}