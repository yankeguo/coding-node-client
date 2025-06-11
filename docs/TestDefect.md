# TestDefect

测试任务的缺陷信息

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AssignedTo** | **string** | 处理人 | [optional] [default to '']
**Author** | **string** | 创建人 | [optional] [default to '']
**CreatedAt** | **string** | 创建时间 | [optional] [default to '']
**Description** | **string** | 描述 | [optional] [default to '']
**Id** | **number** | 缺陷 ID | [optional] [default to undefined]
**Name** | **string** | 标题 | [optional] [default to '']
**Status** | **string** | 状态 | [optional] [default to '']
**StatusName** | **string** | 状态名称 | [optional] [default to '']

## Example

```typescript
import { TestDefect } from './api';

const instance: TestDefect = {
    AssignedTo,
    Author,
    CreatedAt,
    Description,
    Id,
    Name,
    Status,
    StatusName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
