# IssueStatus

事项状态

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreatedAt** | **number** | 创建时间戳 | [optional] [default to undefined]
**Description** | **string** | 描述 | [optional] [default to '']
**Id** | **number** | 事项状态 ID | [optional] [default to undefined]
**Index** | **number** | 状态序号 | [optional] [default to undefined]
**IsSystem** | **boolean** | 是否是系统内置 | [optional] [default to false]
**Name** | **string** | 名称 | [optional] [default to '']
**Type** | **string** | 类型：TODO、PROCESSING、COMPLETED | [optional] [default to '']
**UpdatedAt** | **number** | 修改时间戳 | [optional] [default to undefined]

## Example

```typescript
import { IssueStatus } from './api';

const instance: IssueStatus = {
    CreatedAt,
    Description,
    Id,
    Index,
    IsSystem,
    Name,
    Type,
    UpdatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
