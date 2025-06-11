# Epic

史诗信息

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Assignee** | [**User**](User.md) |  | [optional] [default to undefined]
**Code** | **number** | 史诗 Code | [optional] [default to undefined]
**IssueStatusId** | **number** | 事项状态 Id | [optional] [default to undefined]
**IssueStatusName** | **string** | 事项状态名称 | [optional] [default to '']
**Name** | **string** | 名称 | [optional] [default to '']
**Priority** | **string** | 优先级：  \&quot;0\&quot; - 低，  \&quot;1\&quot; - 中，  \&quot;2\&quot; - 高，  \&quot;3\&quot; - 紧急，  \&quot;\&quot; - 未指定 | [optional] [default to '']
**Type** | **string** | 史诗 Type | [optional] [default to '']

## Example

```typescript
import { Epic } from './api';

const instance: Epic = {
    Assignee,
    Code,
    IssueStatusId,
    IssueStatusName,
    Name,
    Priority,
    Type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
