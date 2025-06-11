# CommitComment

提交评论的信息

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Author** | [**CodingUser**](CodingUser.md) |  | [optional] [default to undefined]
**CommitSha** | **string** | 提交 ID | [optional] [default to '']
**Content** | **string** | 评论内容 | [optional] [default to '']
**CreatedAt** | **number** | 创建时间 | [optional] [default to undefined]
**DepotId** | **number** | 仓库 ID | [optional] [default to undefined]
**Id** | **number** | 提交评论 ID | [optional] [default to undefined]
**Index** | **number** | git diff 信息的第几行 | [optional] [default to undefined]
**Path** | **string** | 评论的文件路径 | [optional] [default to '']

## Example

```typescript
import { CommitComment } from './api';

const instance: CommitComment = {
    Author,
    CommitSha,
    Content,
    CreatedAt,
    DepotId,
    Id,
    Index,
    Path,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
