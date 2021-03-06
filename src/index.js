import Alert from "./alert";
import Axios from "./ajax";
import Badge from "./badge";
import Box from "./box";
import {Breadcrumb, BreadcrumbItem} from "./breadcrumb";
import {Button, ButtonGroup} from "./button";
import Card from "./card";
import {Carousel, CarouselItem} from "./carousel";
import Cascader from "./cascader";
import {Checkbox, CheckboxGroup} from "./checkbox";
import {Col, Row} from "./grid";
import {Collapse, CollapseItem} from "./collapse";
import {DatePicker, TimePicker, TimeSelect} from "./date-picker";
import Dialog from "./dialog";
import {Dropdown, DropdownItem, DropdownMenu, MenuDropdown} from "./dropdown";
import {Form, FormItem} from "./form";
import Input from "./input";
import InputNumber from "./input-number";
import Scrollbar from "./scrollbar";
import Switch from "./switch";

const components = [
    Alert,
    Badge,
    Box,
    Breadcrumb,
    BreadcrumbItem,
    Button,
    ButtonGroup,
    Card,
    Carousel,
    CarouselItem,
    Cascader,
    Checkbox,
    CheckboxGroup,
    Col,
    Collapse,
    CollapseItem,
    DatePicker,
    Dialog,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    Form,
    FormItem,
    Input,
    InputNumber,
    MenuDropdown,
    Row,
    Scrollbar,
    Switch,
    TimePicker,
    TimeSelect
];

const install = function(Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  });
  Vue.prototype.$audio = Audio
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Alert,
  Axios,
  Badge,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonGroup,
  Card,
  Carousel,
  CarouselItem,
  Cascader,
  Checkbox,
  CheckboxGroup,
  Col,
  Collapse,
  CollapseItem,
  DatePicker,
  Dialog,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Form,
  FormItem,
  Input,
  InputNumber,
  MenuDropdown,
  Row,
  Scrollbar,
  Switch,
  TimePicker,
  TimeSelect
}
