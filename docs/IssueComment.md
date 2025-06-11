# IssueComment

事项评论

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommentId** | **number** | 评论 ID | [optional] [default to undefined]
**Content** | **string** | 解析后的内容 | [optional] [default to '']
**CreatedAt** | **number** | 创建时间戳 | [optional] [default to undefined]
**CreatorId** | **number** | 创建人 ID | [optional] [default to undefined]
**ParentId** | **number** | 父评论 ID | [optional] [default to undefined]
**RawContent** | **string** | 内容 | [optional] [default to '']
**UpdatedAt** | **number** | 更新时间戳 | [optional] [default to undefined]
**FileId** | **Array&lt;number&gt;** | 评论中图片的文件 Id 列表 | [optional] [default to undefined]

## Example

```typescript
import { IssueComment } from './api';

const instance: IssueComment = {
    CommentId,
    Content,
    CreatedAt,
    CreatorId,
    ParentId,
    RawContent,
    UpdatedAt,
    FileId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
