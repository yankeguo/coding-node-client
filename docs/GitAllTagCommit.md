# GitAllTagCommit

请求标签的commit信息

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AuthorEmail** | **string** | 作者邮箱 | [optional] [default to '']
**AuthorName** | **string** | 作者姓名 | [optional] [default to '']
**CommitDate** | **number** | 提交时间 | [optional] [default to undefined]
**CommitterEmail** | **string** | 提交者邮箱 | [optional] [default to '']
**CommitterName** | **string** | 提交者姓名 | [optional] [default to '']
**CreatedAt** | **number** | 创建时间 | [optional] [default to undefined]
**Parents** | **Array&lt;string&gt;** | 父提交 | [optional] [default to undefined]
**Sha** | **string** | 提交sha | [optional] [default to '']
**ShortMessage** | **string** | 短描述 | [optional] [default to '']

## Example

```typescript
import { GitAllTagCommit } from './api';

const instance: GitAllTagCommit = {
    AuthorEmail,
    AuthorName,
    CommitDate,
    CommitterEmail,
    CommitterName,
    CreatedAt,
    Parents,
    Sha,
    ShortMessage,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
