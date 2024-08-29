/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdFormProps } from './type';
const props: TdFormProps = {
  /** 是否在表单标签字段右侧显示冒号 */
  colon: {
    type: Boolean,
    value: false,
  },
  /** 是否禁用整个表单 */
  disabled: {
    type: null,
    value: undefined,
  },
  /** 表单错误信息配置，示例：`{ idcard: '请输入正确的身份证号码', max: '字符长度不能超过 ${max}' }` */
  errorMessage: {
    type: Object,
  },
  /** 表单字段标签对齐方式：左对齐、右对齐、顶部对齐 */
  labelAlign: {
    type: String,
    value: 'right',
  },
  /** 可以整体设置label标签宽度，默认为81px */
  labelWidth: {
    type: null,
    value: '81px',
  },
  /** 是否阻止表单提交默认事件（表单提交默认事件会刷新页面），设置为 `true` 可以避免刷新 */
  preventSubmitDefault: {
    type: Boolean,
    value: true,
  },
  /** 是否显示必填符号（*），默认显示 */
  requiredMark: {
    type: null,
    value: undefined,
  },
  /** 重置表单的方式，值为 empty 表示重置表单为空，值为 initial 表示重置表单数据为初始值 */
  resetType: {
    type: String,
    value: 'empty',
  },
  /** 表单字段校验规则 */
  rules: {
    type: Object,
  },
  /** 表单校验不通过时，是否自动滚动到第一个校验不通过的字段，平滑滚动或是瞬间直达。值为空则表示不滚动 */
  scrollToFirstError: {
    type: String,
  },
  /** 校验不通过时，是否显示错误提示信息，统一控制全部表单项。如果希望控制单个表单项，请给 FormItem 设置该属性 */
  showErrorMessage: {
    type: Boolean,
    value: true,
  },
  /** 校验状态图标，值为 `true` 显示默认图标，默认图标有 成功、失败、警告 等，不同的状态图标不同。`statusIcon` 值为 `false`，不显示图标。`statusIcon` 值类型为渲染函数，则可以自定义右侧状态图标 */
  statusIcon: {
    type: null,
    value: undefined,
  },
  /** 【讨论中】当校验结果只有告警信息时，是否触发 `submit` 提交事件 */
  submitWithWarningMessage: {
    type: Boolean,
    value: false,
  },
};

export default props;
