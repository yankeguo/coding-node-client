# CustomFieldChangeLog

事项自定义属性变更日志

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActionType** | **string** | 动作类型  | [optional] [default to '']
**Creator** | **number** | 创建人ID  | [optional] [default to undefined]
**FieldId** | **number** | 自定义属性ID  | [optional] [default to undefined]
**FieldName** | **string** | 自定义属性名字  | [optional] [default to '']
**FieldType** | **string** | 自定义属性类型  | [optional] [default to '']
**FieldValue** | **string** | 自定义属性的值  | [optional] [default to '']
**IssueId** | **number** | 事项id（不是页面上的ID，是数据库中的唯一ID） | [optional] [default to undefined]
**UpdatedAt** | **number** | 更新时间戳  | [optional] [default to undefined]

## Example

```typescript
import { CustomFieldChangeLog } from './api';

const instance: CustomFieldChangeLog = {
    ActionType,
    Creator,
    FieldId,
    FieldName,
    FieldType,
    FieldValue,
    IssueId,
    UpdatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
