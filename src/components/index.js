import Vue from 'vue'

// 引入
import SearchTool from '@/components/SearchTool';
import BaseTable from '@/components/Tables/BaseTable';
import DetailTable from '@/components/Tables/DetailTable';
import TabTable from '@/components/Tables/TabTable';
import Pagination from '@/components/Pagination/';

// 注册为全局组件;
Vue.component('SearchTool', SearchTool);
Vue.component('BaseTable', BaseTable);
Vue.component('DetailTable', DetailTable);
Vue.component('TabTable', TabTable);
Vue.component('Pagination', Pagination);