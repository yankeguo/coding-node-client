# Commit

代码仓库的提交信息

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Author** | [**Committer**](Committer.md) |  | [optional] [default to undefined]
**AuthorEmail** | **string** | 作者邮箱 | [optional] [default to '']
**AuthorName** | **string** | 作者姓名 | [optional] [default to '']
**CommitDate** | **number** | 提交时间的时间戳 | [optional] [default to undefined]
**Committer** | [**Committer**](Committer.md) |  | [optional] [default to undefined]
**CreatedAt** | **number** | 提交时间的时间戳 | [optional] [default to undefined]
**FullMessage** | **string** | 提交附带的全部信息 | [optional] [default to '']
**Parents** | **Array&lt;string&gt;** | 父提交 | [optional] [default to undefined]
**Sha** | **string** | 提交的sha值(commitId) | [optional] [default to '']
**ShortMessage** | **string** | 提交附带的message | [optional] [default to '']

## Example

```typescript
import { Commit } from './api';

const instance: Commit = {
    Author,
    AuthorEmail,
    AuthorName,
    CommitDate,
    Committer,
    CreatedAt,
    FullMessage,
    Parents,
    Sha,
    ShortMessage,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
