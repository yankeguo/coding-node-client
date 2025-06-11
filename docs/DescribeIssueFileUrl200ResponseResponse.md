# DescribeIssueFileUrl200ResponseResponse

公共返回体

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Url** | **string** | 文件下载地址 | [optional] [default to undefined]
**AttachmentFileUrl** | **Array&lt;string&gt;** | 事项附件下载地址列表 | [optional] [default to undefined]
**DescriptionImageUrl** | **Array&lt;string&gt;** | 事项描述中图片下载地址列表 | [optional] [default to undefined]
**CommentImageUrl** | **Array&lt;string&gt;** | 事项评论中图片下载地址列表 | [optional] [default to undefined]
**RequestId** | **string** | 请求id | [optional] [default to 'xxxxx']

## Example

```typescript
import { DescribeIssueFileUrl200ResponseResponse } from './api';

const instance: DescribeIssueFileUrl200ResponseResponse = {
    Url,
    AttachmentFileUrl,
    DescriptionImageUrl,
    CommentImageUrl,
    RequestId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
