# ProjectIssueField

项目的事项属性

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreatedAt** | **number** | 创建时间戳 | [optional] [default to undefined]
**IssueField** | [**IssueField**](IssueField.md) |  | [optional] [default to undefined]
**IssueFieldId** | **number** | 关联属性 ID | [optional] [default to undefined]
**IssueType** | **string** | 事项类型 | [optional] [default to '']
**NeedDefault** | **boolean** | 是否有默认值 | [optional] [default to false]
**Required** | **boolean** | 是否必填 | [optional] [default to false]
**UpdatedAt** | **number** | 修改时间戳 | [optional] [default to undefined]
**ValueString** | **string** | 默认值， JSON 字符串。例如：{\&quot;type\&quot;:\&quot;VARIABLE\&quot;,\&quot;value\&quot;:\&quot;CREATOR\&quot;}  type：默认值类型，VARIABLE（变量）、CONSTANT（常量）；  value：默认值，根据 IssueField.ComponentType，可能为不同类型的值（数值、字符串、数组）；常量值 CREATOR 表示创建者 | [optional] [default to '']

## Example

```typescript
import { ProjectIssueField } from './api';

const instance: ProjectIssueField = {
    CreatedAt,
    IssueField,
    IssueFieldId,
    IssueType,
    NeedDefault,
    Required,
    UpdatedAt,
    ValueString,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
