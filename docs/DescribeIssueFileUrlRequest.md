# DescribeIssueFileUrlRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FileId** | **number** | 文件 ID | [default to undefined]
**ProjectName** | **string** | 项目名称 | [default to undefined]
**IssueCode** | **number** | 事项Code, 对应页面的ID字段, ProjectName + IssueCode 可以查询事项的附件和描述中图片的下载地址 | [optional] [default to undefined]
**QueryComment** | **boolean** | 是否查询事项评论中的图片路径， 可查询所有评论中的图片路径 | [optional] [default to undefined]

## Example

```typescript
import { DescribeIssueFileUrlRequest } from './api';

const instance: DescribeIssueFileUrlRequest = {
    FileId,
    ProjectName,
    IssueCode,
    QueryComment,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
