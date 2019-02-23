import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { TableService } from '../table.service';
import { TableMeta } from 'src/app/table/table-model';
import { element } from 'protractor';
declare var $: any;
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
  //  changeDetection:ChangeDetectionStrategy.OnPush

})
export class TableComponent implements OnInit {
  tableData: any = [];
  tileInfo: any = [];
  globalSearchFields: any = [];
  questionsData:any=[];
  search: string = "";
  masterTableData: any = [];
  tableMeta = new TableMeta();
  tableMetaModel = new TableMeta();
  errorMessage = "Loading....";
  filterval: any = "";
  value: any = "";
  xmlString="";
    // dates:any="";
  constructor(private _tabserv?: TableService, private ref?: ChangeDetectorRef) { }

  ngOnInit() {
    $(document).ready(function () {
      $('button.btn-primary').click(function () {
          $('#formView').hide();
          $('#treeView').show();
          var tree = $.parseXML($('textarea').val());
          console.log(this.xmlString,"xml");
          traverse($('#treeView li'), tree.firstChild)
          // this – is an &mdash;
          $('<b>–<\/b>').prependTo('#treeView li:has(li)').click(function () {
              var sign = $(this).text()
              if (sign == "–")
                  $(this).text('+').next().children().hide()
              else
                  $(this).text('–').next().children().show()
          });
      });

      function traverse(node, tree) {
          var children = $(tree).children()
          node.append(tree.nodeName)
          if (children.length) {
              var ul = $("<ul>").appendTo(node)
              children.each(function () {
                  var li = $('<li>').appendTo(ul)
                  traverse(li, this)
              })
          } else {
              $('<ul><li>' + $(tree).text() + '<\/li><\/ul>').appendTo(node)
          }
      }
  });
    if (!this.tableData.length)
      this._tabserv.loadData("table-data").subscribe(data => {
        this.tableData = data;
        this.masterTableData = data;
      }, (err) => {
        this.errorMessage = err;
      })
    this._tabserv.loadData("tiles-info").subscribe(data => {
      this.tileInfo = data;
    }, (err) => {
      this.errorMessage = err;
    })
    this._tabserv.loadData("global-search-fields").subscribe(data => {
      this.globalSearchFields = data;
    }, (err) => {
      this.errorMessage = err;
    })
    this._tabserv.loadData("questionA").subscribe(data=>{
      this.questionsData=data;
    })
    this._tabserv.getXml().subscribe(data => {
      this.xmlString = data;
    }, (err) => {
      this.errorMessage = err;
    })



    // getting data from my json forming table
   this._tabserv.loadData("mytable").subscribe(data=>{
       console.log(data,"myjons");
       this.myData=data;
   })



  }
  myData:any=[];
  dates = [new Date().getTime()]
  clickMe() {
    this.dates.push(new Date().getTime());
    console.log(this.dates);
  }

  searchval(val) {
    let results = [];
    if (this.search.length > 1 && this.masterTableData) {
      for (let i = 0; i < this.masterTableData.length; i++) {
        if (this.searchData(this.masterTableData[i])) {
          results.push(this.masterTableData[i]);
        }
      }
      this.tableData = results;
    } else {
      this.tableData = this.masterTableData;
    }
    this.ref.markForCheck();
  }
  // getType(val) { //check the type of data in json
  //   if (typeof val === 'undefined') return 'undefined';
  //   if (typeof val === 'object' && !val) return 'null';
  //   return ({}).toString.call(val).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
  // }
  searchData(data) {
    for (const key in data) {
      console.log(data[key], "type of dataa");
      if (typeof data[key] === 'string' && data[key].toLowerCase().indexOf(this.filtersearch.toLowerCase()) != -1) {
        return true;
      }
    }
    return false;
  }
  aboutval: string = "";
  getInput(val) {
    this.aboutval = val;
  }
  childTableHeaders: any = [
    {
      "name": "S.no",
      "label": "sno"
    },
    {
      "name": "FirstName",
      "label": "firstname"
    },
    {
      "name": "LastName",
      "label": "lastname"
    }, {
      "name": "Email",
      "label": "email"
    }
  ]
  childTableData: any = [
    {
      "sno": "1",
      "firstname": "G",
      "lastname": "D",
      "email": "gsk@gamil.com"
    },
    {
      "sno": "1",
      "firstname": "G",
      "lastname": "D",
      "email": "gsk@gamil.com"
    },
    {
      "sno": "1",
      "firstname": "G",
      "lastname": "D",
      "email": "gsk@gamil.com"
    },
    {
      "sno": "1",
      "firstname": "G",
      "lastname": "D",
      "email": "gsk@gamil.com"
    }
  ]
  filtersearch: string = "";
  Searchlist = [];
  changeCheckedVal(status, checkval, options) {
    if (status == true) {
      let Obj = {
        "title": checkval,
        "options": options
      }
      if (this.Searchlist.indexOf(Obj) == -1) {
        this.Searchlist.push(Obj);
      }
    }
    else {
      for (var i = 0; i < this.Searchlist.length; i++) {
        if (this.Searchlist[i].title == checkval) {
          this.Searchlist.splice(i, 1)
        }
      }
    }
  }
  globalFilter() {
    let results = [];
    if (this.filtersearch.length > 1) {
      for (let i = 0; i < this.Searchlist.length; i++) {
        if (this.searchData(this.Searchlist[i])) {
          results.push(this.Searchlist[i]);
        }
      }
      this.Searchlist = results;
    } else {
      this.Searchlist = this.Searchlist;
    }
    this.ref.markForCheck();
  }
  selectedOptions(item){
   this.filtersearch=item;
   $(".sub-sections").hide();
  }
  searchFilter(){
     $(".sub-sections").show();
  }
} 
