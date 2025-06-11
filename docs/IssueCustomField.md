# IssueCustomField

事项自定义属性

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **number** | 自定义属性 Id | [optional] [default to undefined]
**Name** | **string** | 自定义属性名称 | [optional] [default to '']
**ValueString** | **string** | 自定义属性值  根据自定义属性的 ComponentType，返回不同类型的值：  单个成员选择（SELECT_MEMBER_SINGLE）为 User 对象 JSON，  多个成员选择（SELECT_MEMBER_MULTI）为 User 数组 JSON，  多选菜单（SELECT_MULTI）为 String 数组 JSON，  其余类型为普通字符串 | [optional] [default to '']

## Example

```typescript
import { IssueCustomField } from './api';

const instance: IssueCustomField = {
    Id,
    Name,
    ValueString,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
