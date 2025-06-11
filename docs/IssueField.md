# IssueField

事项属性

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ComponentType** | **string** | 字段空间类型  TEXT_SINGLE_LINE - 单行文本  TEXT_MULTI_LINE - 多行文本  SELECT_SINGLE - 单选列表  SELECT_MULTI - 多选列表  RADIO - 单选框  CHECKBOX - 多选框  SELECT_MEMBER_SINGLE - 用户单选列表  SELECT_MEMBER_MULTI - 用户多选列表  TEXT_DATETIME - 日期时间选择框  TEXT_DATE - 日期选择框  TEXT_INTEGER - 整数输入框  TEXT_DECIMAL - 小数输入框 | [optional] [default to '']
**CreatedAt** | **number** | 创建时间戳 | [optional] [default to undefined]
**CreatedBy** | **number** | 创建者 ID | [optional] [default to undefined]
**Deletable** | **boolean** | 是否可删除 | [optional] [default to false]
**Description** | **string** | 描述 | [optional] [default to '']
**Editable** | **boolean** | 是否可修改 | [optional] [default to false]
**IconUrl** | **string** | 图标地址 | [optional] [default to '']
**Id** | **number** | 属性 ID | [optional] [default to undefined]
**Name** | **string** | 名称 | [optional] [default to '']
**Options** | [**Array&lt;IssueFieldOption&gt;**](IssueFieldOption.md) | 选项列表 | [optional] [default to undefined]
**Required** | **boolean** | 是否必填 | [optional] [default to false]
**Selectable** | **boolean** | 项目中属性可选 | [optional] [default to false]
**Sortable** | **boolean** | 是否可排序 | [optional] [default to false]
**Type** | **string** | 字段类型 | [optional] [default to '']
**Unit** | **string** | 单位 | [optional] [default to '']
**UpdatedAt** | **number** | 修改时间戳 | [optional] [default to undefined]

## Example

```typescript
import { IssueField } from './api';

const instance: IssueField = {
    ComponentType,
    CreatedAt,
    CreatedBy,
    Deletable,
    Description,
    Editable,
    IconUrl,
    Id,
    Name,
    Options,
    Required,
    Selectable,
    Sortable,
    Type,
    Unit,
    UpdatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
