# DefaultApi

All URIs are relative to *https://e.coding.net/open-api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**archiveTestRun**](#archivetestrun) | **POST** /?action&#x3D;ArchiveTestRun | 测试计划归档|
|[**attachResourceScopeToPolicy**](#attachresourcescopetopolicy) | **POST** /?action&#x3D;AttachResourceScopeToPolicy | 权限组添加可用的资源，原有其它资源不受影响，若已存在的资源不再进行追加|
|[**attachToResource**](#attachtoresource) | **POST** /?action&#x3D;AttachToResource | 授权追加，原有其它授权不受影响，若授权已存在不再进行追加|
|[**bindCdApplicationToProject**](#bindcdapplicationtoproject) | **POST** /?action&#x3D;BindCdApplicationToProject | 绑定 CD 应用到项目|
|[**boundExternalDepot**](#boundexternaldepot) | **POST** /?action&#x3D;BoundExternalDepot | 外部仓库关联|
|[**cancelCdPipeline**](#cancelcdpipeline) | **POST** /?action&#x3D;CancelCdPipeline | CD 部署流程取消执行|
|[**clearCodingCIJobCache**](#clearcodingcijobcache) | **POST** /?action&#x3D;ClearCodingCIJobCache | 构建计划缓存清理|
|[**createArtifactCredit**](#createartifactcredit) | **POST** /?action&#x3D;CreateArtifactCredit | 制品授信清单创建|
|[**createArtifactProperties**](#createartifactproperties) | **POST** /?action&#x3D;CreateArtifactProperties | 制品属性新增（指定版本）|
|[**createArtifactRepository**](#createartifactrepository) | **POST** /?action&#x3D;CreateArtifactRepository | 制品仓库创建|
|[**createAttachmentPrepareSignUrl**](#createattachmentpreparesignurl) | **POST** /?action&#x3D;CreateAttachmentPrepareSignUrl | 附件预上传信息生成|
|[**createBinaryFiles**](#createbinaryfiles) | **POST** /?action&#x3D;CreateBinaryFiles | Git文件-Git仓库创建二进制文件|
|[**createBranchProtection**](#createbranchprotection) | **POST** /?action&#x3D;CreateBranchProtection | 仓库设置-新增代码保护规则|
|[**createBranchProtectionMember**](#createbranchprotectionmember) | **POST** /?action&#x3D;CreateBranchProtectionMember | 仓库设置-新增保护分支规则管理员|
|[**createCaseResult**](#createcaseresult) | **POST** /?action&#x3D;CreateCaseResult | 测试用例添加测试结果|
|[**createCdCloudAccount**](#createcdcloudaccount) | **POST** /?action&#x3D;CreateCdCloudAccount | CD 云账号添加|
|[**createCdHostServerGroup**](#createcdhostservergroup) | **POST** /?action&#x3D;CreateCdHostServerGroup | CD 主机组添加|
|[**createCdPipeline**](#createcdpipeline) | **POST** /?action&#x3D;CreateCdPipeline | CD 部署流程创建|
|[**createCdTask**](#createcdtask) | **POST** /?action&#x3D;CreateCdTask | CD 任务执行|
|[**createCodingCIJob**](#createcodingcijob) | **POST** /?action&#x3D;CreateCodingCIJob | 构建计划创建|
|[**createCodingCIJobByTeamTemplate**](#createcodingcijobbyteamtemplate) | **POST** /?action&#x3D;CreateCodingCIJobByTeamTemplate | 构建计划-根据团队模版创建|
|[**createCodingProject**](#createcodingproject) | **POST** /?action&#x3D;CreateCodingProject | 项目创建|
|[**createDepartment**](#createdepartment) | **POST** /?action&#x3D;CreateDepartment | 部门创建|
|[**createDepotByTemplate**](#createdepotbytemplate) | **POST** /?action&#x3D;CreateDepotByTemplate | 仓库信息-根据模板创建仓库|
|[**createDepotFilePushRule**](#createdepotfilepushrule) | **POST** /?action&#x3D;CreateDepotFilePushRule | 仓库设置-新增git仓库文件推送规则|
|[**createDepotFilePushRulePrivilege**](#createdepotfilepushruleprivilege) | **POST** /?action&#x3D;CreateDepotFilePushRulePrivilege | 仓库设置-新增git仓库文件推送规则特权者|
|[**createFile**](#createfile) | **POST** /?action&#x3D;CreateFile | 文件创建|
|[**createFolder**](#createfolder) | **POST** /?action&#x3D;CreateFolder | 文件夹创建|
|[**createGitBranch**](#creategitbranch) | **POST** /?action&#x3D;CreateGitBranch | 仓库分支-用于代码仓库新建分支|
|[**createGitCommit**](#creategitcommit) | **POST** /?action&#x3D;CreateGitCommit | Git提交-创建一次提交|
|[**createGitCommitComment**](#creategitcommitcomment) | **POST** /?action&#x3D;CreateGitCommitComment | Git提交-为某次提交创建一条评论|
|[**createGitCommitNote**](#creategitcommitnote) | **POST** /?action&#x3D;CreateGitCommitNote | Git提交-创建提交注释。注意：对于 NotesRef 参数建议默认为空，因为git会使用默认的ref ：refs/notes/commits，如果填了这个参数，会用这个参数指定的ref来保存您的git note，有可能会覆盖您原有的ref。|
|[**createGitDeployKey**](#creategitdeploykey) | **POST** /?action&#x3D;CreateGitDeployKey | 仓库设置-新建部署公钥|
|[**createGitDepot**](#creategitdepot) | **POST** /?action&#x3D;CreateGitDepot | 仓库信息-创建代码仓库|
|[**createGitFiles**](#creategitfiles) | **POST** /?action&#x3D;CreateGitFiles | Git文件-创建仓库文件|
|[**createGitMergeReq**](#creategitmergereq) | **POST** /?action&#x3D;CreateGitMergeReq | 合并请求-创建git合并请求|
|[**createGitMergeRequest**](#creategitmergerequest) | **POST** /?action&#x3D;CreateGitMergeRequest | 合并请求-创建Git合并请求mr|
|[**createGitProtectedTagRule**](#creategitprotectedtagrule) | **POST** /?action&#x3D;CreateGitProtectedTagRule | 仓库设置-创建标签保护规则|
|[**createGitProtectedTagRules**](#creategitprotectedtagrules) | **POST** /?action&#x3D;CreateGitProtectedTagRules | 仓库设置-批量创建标签保护规则|
|[**createGitRelease**](#creategitrelease) | **POST** /?action&#x3D;CreateGitRelease | 版本信息-新建git版本|
|[**createGitTag**](#creategittag) | **POST** /?action&#x3D;CreateGitTag | 标签信息-创建标签|
|[**createIssue**](#createissue) | **POST** /CreateIssue | 事项创建|
|[**createIssueBlock**](#createissueblock) | **POST** /?action&#x3D;CreateIssueBlock | 前置事项添加|
|[**createIssueComment**](#createissuecomment) | **POST** /?action&#x3D;CreateIssueComment | 事项评论创建|
|[**createIssueModule**](#createissuemodule) | **POST** /CreateIssueModule | 事项模块创建|
|[**createIssueWorkHours**](#createissueworkhours) | **POST** /?action&#x3D;CreateIssueWorkHours | 工时登记|
|[**createIteration**](#createiteration) | **POST** /?action&#x3D;CreateIteration | 迭代创建|
|[**createMemberSshKey**](#createmembersshkey) | **POST** /?action&#x3D;CreateMemberSshKey | 仓库设置-导入团队成员SSH公钥|
|[**createMergeRequestNote**](#createmergerequestnote) | **POST** /?action&#x3D;CreateMergeRequestNote | 合并请求-创建合并请求行评论和改动文件diff行评论|
|[**createMergeRequestReviewer**](#createmergerequestreviewer) | **POST** /?action&#x3D;CreateMergeRequestReviewer | 合并请求-新增合并请求评审者|
|[**createPolicy**](#createpolicy) | **POST** /?action&#x3D;CreatePolicy | 权限组创建|
|[**createProgram**](#createprogram) | **POST** /?action&#x3D;CreateProgram | 项目集创建|
|[**createProgramMemberPolicy**](#createprogrammemberpolicy) | **POST** /?action&#x3D;CreateProgramMemberPolicy | 项目集成员权限组添加|
|[**createProgramProjects**](#createprogramprojects) | **POST** /?action&#x3D;CreateProgramProjects | 项目集中添加项目|
|[**createProjectAnnouncement**](#createprojectannouncement) | **POST** /?action&#x3D;CreateProjectAnnouncement | 项目公告创建|
|[**createProjectLabel**](#createprojectlabel) | **POST** /?action&#x3D;CreateProjectLabel | 项目标签创建|
|[**createProjectMemberPrincipal**](#createprojectmemberprincipal) | **POST** /?action&#x3D;CreateProjectMemberPrincipal | 项目成员主体新增(包含用户组、部门、成员)|
|[**createProjectWithTemplate**](#createprojectwithtemplate) | **POST** /?action&#x3D;CreateProjectWithTemplate | 模版项目创建|
|[**createReadOnlyRef**](#createreadonlyref) | **POST** /?action&#x3D;CreateReadOnlyRef | 仓库分支-创建只读分支|
|[**createRelease**](#createrelease) | **POST** /CreateRelease | 版本创建|
|[**createReport**](#createreport) | **POST** /?action&#x3D;CreateReport | 测试报告创建|
|[**createRequirementDefectRelation**](#createrequirementdefectrelation) | **POST** /?action&#x3D;CreateRequirementDefectRelation | 需求关联缺陷|
|[**createSshKey**](#createsshkey) | **POST** /?action&#x3D;CreateSshKey | 仓库设置-导入用户SSH公钥|
|[**createTestCase**](#createtestcase) | **POST** /?action&#x3D;CreateTestCase | 测试用例创建|
|[**createTestCaseSection**](#createtestcasesection) | **POST** /?action&#x3D;CreateTestCaseSection | 测试用例分组创建|
|[**createTestDefect**](#createtestdefect) | **POST** /?action&#x3D;CreateTestDefect | 测试任务关联缺陷|
|[**createTestResult**](#createtestresult) | **POST** /?action&#x3D;CreateTestResult | 测试任务添加测试结果|
|[**createTestResults**](#createtestresults) | **POST** /?action&#x3D;CreateTestResults | 测试任务状态批量更新|
|[**createTestRun**](#createtestrun) | **POST** /?action&#x3D;CreateTestRun | 测试计划创建|
|[**createTestStepResult**](#createteststepresult) | **POST** /?action&#x3D;CreateTestStepResult | 测试任务添加某步骤的测试结果|
|[**createUserGroup**](#createusergroup) | **POST** /?action&#x3D;CreateUserGroup | 用户组创建|
|[**createUserGroupUsers**](#createusergroupusers) | **POST** /?action&#x3D;CreateUserGroupUsers | 用户组添加用户|
|[**deleteAllUsersOnGroup**](#deleteallusersongroup) | **POST** /?action&#x3D;DeleteAllUsersOnGroup | 用户组清理用户|
|[**deleteArtifactProperties**](#deleteartifactproperties) | **POST** /?action&#x3D;DeleteArtifactProperties | 制品属性删除|
|[**deleteBranchProtection**](#deletebranchprotection) | **POST** /?action&#x3D;DeleteBranchProtection | 仓库设置-删除保护分支规则|
|[**deleteBranchProtectionMember**](#deletebranchprotectionmember) | **POST** /?action&#x3D;DeleteBranchProtectionMember | 仓库设置-删除保护分支规则管理员|
|[**deleteCdCloudAccount**](#deletecdcloudaccount) | **POST** /?action&#x3D;DeleteCdCloudAccount | CD 云账号删除|
|[**deleteCdHostServerGroup**](#deletecdhostservergroup) | **POST** /?action&#x3D;DeleteCdHostServerGroup | CD 主机组删除|
|[**deleteCdPipeline**](#deletecdpipeline) | **POST** /?action&#x3D;DeleteCdPipeline | CD 部署流程删除|
|[**deleteCodingCIBuild**](#deletecodingcibuild) | **POST** /?action&#x3D;DeleteCodingCIBuild | 构建删除|
|[**deleteCodingCIJob**](#deletecodingcijob) | **POST** /?action&#x3D;DeleteCodingCIJob | 构建计划删除|
|[**deleteDepartment**](#deletedepartment) | **POST** /?action&#x3D;DeleteDepartment | 部门删除|
|[**deleteDepotFilePushRule**](#deletedepotfilepushrule) | **POST** /?action&#x3D;DeleteDepotFilePushRule | 仓库设置-删除git仓库文件推送规则|
|[**deleteDepotFilePushRuleDenyPrivilege**](#deletedepotfilepushruledenyprivilege) | **POST** /?action&#x3D;DeleteDepotFilePushRuleDenyPrivilege | 仓库设置-删除git仓库特权者文件推送权限|
|[**deleteGitBranch**](#deletegitbranch) | **POST** /?action&#x3D;DeleteGitBranch | 仓库分支-删除代码仓库分支|
|[**deleteGitDeployKey**](#deletegitdeploykey) | **POST** /?action&#x3D;DeleteGitDeployKey | 仓库设置-删除部署公钥|
|[**deleteGitDepot**](#deletegitdepot) | **POST** /?action&#x3D;DeleteGitDepot | 仓库信息-删除git仓库|
|[**deleteGitFiles**](#deletegitfiles) | **POST** /?action&#x3D;DeleteGitFiles | Git文件-删除文件并提交|
|[**deleteGitMergedBranches**](#deletegitmergedbranches) | **POST** /?action&#x3D;DeleteGitMergedBranches | 仓库分支-删除已合并到默认分支的分支（此操作不会删除受保护的分支)|
|[**deleteGitProtectedTagRule**](#deletegitprotectedtagrule) | **POST** /?action&#x3D;DeleteGitProtectedTagRule | 标签信息-删除标签保护规则|
|[**deleteGitRelease**](#deletegitrelease) | **POST** /?action&#x3D;DeleteGitRelease | 版本信息-删除仓库版本|
|[**deleteGitTag**](#deletegittag) | **POST** /?action&#x3D;DeleteGitTag | 标签信息-代码仓库删除tag|
|[**deleteIssue**](#deleteissue) | **POST** /?action&#x3D;DeleteIssue | 事项删除|
|[**deleteIssueBlock**](#deleteissueblock) | **POST** /?action&#x3D;DeleteIssueBlock | 前置事项删除|
|[**deleteIssueModule**](#deleteissuemodule) | **POST** /DeleteIssueModule | 事项模块删除|
|[**deleteIssueWorkHours**](#deleteissueworkhours) | **POST** /?action&#x3D;DeleteIssueWorkHours | 工时日志删除|
|[**deleteIteration**](#deleteiteration) | **POST** /?action&#x3D;DeleteIteration | 迭代删除|
|[**deleteMemberSshKey**](#deletemembersshkey) | **POST** /?action&#x3D;DeleteMemberSshKey | 仓库设置-删除团队成员的SSH公钥|
|[**deleteMergeRequestNote**](#deletemergerequestnote) | **POST** /?action&#x3D;DeleteMergeRequestNote | 合并请求-删除合并请求行评论和改动文件diff行评论|
|[**deleteMergeRequestReviewer**](#deletemergerequestreviewer) | **POST** /?action&#x3D;DeleteMergeRequestReviewer | 合并请求-删除mr评审者|
|[**deleteOneProject**](#deleteoneproject) | **POST** /?action&#x3D;DeleteOneProject | 单个项目删除|
|[**deletePoliciesById**](#deletepoliciesbyid) | **POST** /?action&#x3D;DeletePoliciesById | 权限组批量删除|
|[**deleteProgramMemberPolicy**](#deleteprogrammemberpolicy) | **POST** /?action&#x3D;DeleteProgramMemberPolicy | 项目集成员权限组删除|
|[**deleteProjectAnnouncement**](#deleteprojectannouncement) | **POST** /?action&#x3D;DeleteProjectAnnouncement | 项目公告删除|
|[**deleteProjectLabel**](#deleteprojectlabel) | **POST** /?action&#x3D;DeleteProjectLabel | 项目标签删除|
|[**deleteProjectMemberPrincipal**](#deleteprojectmemberprincipal) | **POST** /?action&#x3D;DeleteProjectMemberPrincipal | 项目成员主体删除(包含用户组、部门、成员)|
|[**deleteRelease**](#deleterelease) | **POST** /DeleteRelease | 版本删除|
|[**deleteReport**](#deletereport) | **POST** /?action&#x3D;DeleteReport | 测试报告删除|
|[**deleteRequirementDefectRelation**](#deleterequirementdefectrelation) | **POST** /?action&#x3D;DeleteRequirementDefectRelation | 需求取消关联缺陷|
|[**deleteSshKey**](#deletesshkey) | **POST** /?action&#x3D;DeleteSshKey | 仓库设置-删除当前用户的SSH公钥|
|[**deleteTeamLevelDepotSpec**](#deleteteamleveldepotspec) | **POST** /?action&#x3D;DeleteTeamLevelDepotSpec | 仓库设置-删除团队级别的分支规范|
|[**deleteTeamMember**](#deleteteammember) | **POST** /?action&#x3D;DeleteTeamMember | 团队成员删除|
|[**deleteTestCase**](#deletetestcase) | **POST** /?action&#x3D;DeleteTestCase | 测试用例删除|
|[**deleteTestCaseSection**](#deletetestcasesection) | **POST** /?action&#x3D;DeleteTestCaseSection | 测试用例分组删除|
|[**deleteTestRun**](#deletetestrun) | **POST** /?action&#x3D;DeleteTestRun | 测试计划删除|
|[**deleteUserGroupByIds**](#deleteusergroupbyids) | **POST** /?action&#x3D;DeleteUserGroupByIds | 用户组删除|
|[**deleteUserGroupUsers**](#deleteusergroupusers) | **POST** /?action&#x3D;DeleteUserGroupUsers | 用户组删除用户|
|[**describeAgentSecret**](#describeagentsecret) | **POST** /?action&#x3D;DescribeAgentSecret | 堡垒机安装 Secret|
|[**describeAllMergeRequestNotes**](#describeallmergerequestnotes) | **POST** /?action&#x3D;DescribeAllMergeRequestNotes | 合并请求-获取所有合并请求行评论和改动文件diff行评论|
|[**describeAllProjectLabels**](#describeallprojectlabels) | **POST** /?action&#x3D;DescribeAllProjectLabels | 项目标签查询|
|[**describeAllProjectsIssueWorkLogList**](#describeallprojectsissueworkloglist) | **POST** /?action&#x3D;DescribeAllProjectsIssueWorkLogList | 工时日志列表查询|
|[**describeArtifactChecksums**](#describeartifactchecksums) | **POST** /?action&#x3D;DescribeArtifactChecksums | 制品Checksum列表查询|
|[**describeArtifactCredit**](#describeartifactcredit) | **POST** /?action&#x3D;DescribeArtifactCredit | 查询制品授信清单详情|
|[**describeArtifactCreditList**](#describeartifactcreditlist) | **POST** /?action&#x3D;DescribeArtifactCreditList | 制品授信清单列表查询|
|[**describeArtifactFileDownloadUrl**](#describeartifactfiledownloadurl) | **POST** /?action&#x3D;DescribeArtifactFileDownloadUrl | 制品文件临时下载链接获取|
|[**describeArtifactPackageList**](#describeartifactpackagelist) | **POST** /?action&#x3D;DescribeArtifactPackageList | 制品包（镜像）列表查询|
|[**describeArtifactProperties**](#describeartifactproperties) | **POST** /?action&#x3D;DescribeArtifactProperties | 制品属性列表查询|
|[**describeArtifactRepositoryFileList**](#describeartifactrepositoryfilelist) | **POST** /?action&#x3D;DescribeArtifactRepositoryFileList | 制品仓库下可下载的文件列表获取|
|[**describeArtifactRepositoryList**](#describeartifactrepositorylist) | **POST** /?action&#x3D;DescribeArtifactRepositoryList | 制品仓库列表查询|
|[**describeArtifactVersionFileList**](#describeartifactversionfilelist) | **POST** /?action&#x3D;DescribeArtifactVersionFileList | 制品版本可下载的文件列表获取|
|[**describeArtifactVersionList**](#describeartifactversionlist) | **POST** /?action&#x3D;DescribeArtifactVersionList | 制品版本列表查询|
|[**describeAvailablePoliciesOnResource**](#describeavailablepoliciesonresource) | **POST** /?action&#x3D;DescribeAvailablePoliciesOnResource | 权限组列表查询（指定资源）|
|[**describeBlockIssueList**](#describeblockissuelist) | **POST** /?action&#x3D;DescribeBlockIssueList | 后置事项查询|
|[**describeBlockedByIssueList**](#describeblockedbyissuelist) | **POST** /?action&#x3D;DescribeBlockedByIssueList | 前置事项查询|
|[**describeBranchProtection**](#describebranchprotection) | **POST** /?action&#x3D;DescribeBranchProtection | 仓库设置-查询单个保护分支规则|
|[**describeBranchProtectionMembers**](#describebranchprotectionmembers) | **POST** /?action&#x3D;DescribeBranchProtectionMembers | 仓库设置-查询保护分支规则下所有管理员信息|
|[**describeBranchProtections**](#describebranchprotections) | **POST** /?action&#x3D;DescribeBranchProtections | 仓库设置-查询仓库保护分支规则集合|
|[**describeCanMerge**](#describecanmerge) | **POST** /?action&#x3D;DescribeCanMerge | 合并请求-查看两个分支是否可以合并|
|[**describeCdAgentMachines**](#describecdagentmachines) | **POST** /?action&#x3D;DescribeCdAgentMachines | CD 堡垒机列表获取|
|[**describeCdApplication**](#describecdapplication) | **POST** /?action&#x3D;DescribeCdApplication | CD 应用详情获取|
|[**describeCdApplications**](#describecdapplications) | **POST** /?action&#x3D;DescribeCdApplications | CD 应用列表获取|
|[**describeCdApplicationsByProject**](#describecdapplicationsbyproject) | **POST** /?action&#x3D;DescribeCdApplicationsByProject | 关联应用列表获取（指定项目名）|
|[**describeCdCloudAccounts**](#describecdcloudaccounts) | **POST** /?action&#x3D;DescribeCdCloudAccounts | CD 云账号列表获取|
|[**describeCdDeployCountByApplications**](#describecddeploycountbyapplications) | **POST** /?action&#x3D;DescribeCdDeployCountByApplications | 发布次数-根据应用名列表获取|
|[**describeCdDeployCountByProject**](#describecddeploycountbyproject) | **POST** /?action&#x3D;DescribeCdDeployCountByProject | 关联应用的发布次数获取（指定项目名）|
|[**describeCdDeployTimeByApplications**](#describecddeploytimebyapplications) | **POST** /?action&#x3D;DescribeCdDeployTimeByApplications | 发布时长-根据应用名列表获取|
|[**describeCdDeployTimeByProject**](#describecddeploytimebyproject) | **POST** /?action&#x3D;DescribeCdDeployTimeByProject | 关联应用的发布时长-根据项目名获取|
|[**describeCdDeployTrendByApplications**](#describecddeploytrendbyapplications) | **POST** /?action&#x3D;DescribeCdDeployTrendByApplications | 发布趋势-根据应用名列表获取|
|[**describeCdDeployTrendByProject**](#describecddeploytrendbyproject) | **POST** /?action&#x3D;DescribeCdDeployTrendByProject | 关联应用的发布趋势-根据项目名获取|
|[**describeCdHostServerGroup**](#describecdhostservergroup) | **POST** /?action&#x3D;DescribeCdHostServerGroup | CD 主机组获取|
|[**describeCdHostServerGroups**](#describecdhostservergroups) | **POST** /?action&#x3D;DescribeCdHostServerGroups | CD 主机组列表获取|
|[**describeCdPipeline**](#describecdpipeline) | **POST** /?action&#x3D;DescribeCdPipeline | CD 部署流程执行记录获取|
|[**describeCdPipelineConfig**](#describecdpipelineconfig) | **POST** /?action&#x3D;DescribeCdPipelineConfig | CD 部署流程配置-根据名称获取|
|[**describeCdPipelineConfigs**](#describecdpipelineconfigs) | **POST** /?action&#x3D;DescribeCdPipelineConfigs | CD 应用下的所有部署流程配置获取|
|[**describeCdTask**](#describecdtask) | **POST** /?action&#x3D;DescribeCdTask | CD 任务执行记录获取|
|[**describeCodeSearch**](#describecodesearch) | **POST** /?action&#x3D;DescribeCodeSearch | 仓库信息-查询代码片段详细列表|
|[**describeCodingCIBuild**](#describecodingcibuild) | **POST** /?action&#x3D;DescribeCodingCIBuild | 构建记录详情查询|
|[**describeCodingCIBuildArtifacts**](#describecodingcibuildartifacts) | **POST** /?action&#x3D;DescribeCodingCIBuildArtifacts | 构建任务制品查询|
|[**describeCodingCIBuildEnvs**](#describecodingcibuildenvs) | **POST** /?action&#x3D;DescribeCodingCIBuildEnvs | 构建计划环境变量获取|
|[**describeCodingCIBuildHtmlReports**](#describecodingcibuildhtmlreports) | **POST** /?action&#x3D;DescribeCodingCIBuildHtmlReports | 构建任务网页报告查询|
|[**describeCodingCIBuildLog**](#describecodingcibuildlog) | **POST** /?action&#x3D;DescribeCodingCIBuildLog | 构建日志获取|
|[**describeCodingCIBuildLogRaw**](#describecodingcibuildlograw) | **POST** /?action&#x3D;DescribeCodingCIBuildLogRaw | 构建完整日志查询（原始日志 Raw）|
|[**describeCodingCIBuildMetrics**](#describecodingcibuildmetrics) | **POST** /?action&#x3D;DescribeCodingCIBuildMetrics | 构建计划度量查询|
|[**describeCodingCIBuildStage**](#describecodingcibuildstage) | **POST** /?action&#x3D;DescribeCodingCIBuildStage | 构建任务阶段获取|
|[**describeCodingCIBuildStatistics**](#describecodingcibuildstatistics) | **POST** /?action&#x3D;DescribeCodingCIBuildStatistics | 构建任务统计|
|[**describeCodingCIBuildStep**](#describecodingcibuildstep) | **POST** /?action&#x3D;DescribeCodingCIBuildStep | 构建任务指定阶段的步骤获取|
|[**describeCodingCIBuildStepLog**](#describecodingcibuildsteplog) | **POST** /?action&#x3D;DescribeCodingCIBuildStepLog | 构建步骤日志获取|
|[**describeCodingCIBuilds**](#describecodingcibuilds) | **POST** /?action&#x3D;DescribeCodingCIBuilds | 构建计划的构建列表获取|
|[**describeCodingCIJob**](#describecodingcijob) | **POST** /?action&#x3D;DescribeCodingCIJob | 构建计划详情获取|
|[**describeCodingCIJobs**](#describecodingcijobs) | **POST** /?action&#x3D;DescribeCodingCIJobs | 构建计划查询（通过项目ID）|
|[**describeCodingCurrentUser**](#describecodingcurrentuser) | **POST** /?action&#x3D;DescribeCodingCurrentUser | 当前用户信息查询|
|[**describeCodingProjects**](#describecodingprojects) | **POST** /?action&#x3D;DescribeCodingProjects | 项目列表查询|
|[**describeCommitRefs**](#describecommitrefs) | **POST** /?action&#x3D;DescribeCommitRefs | Git提交-查询commit的ref信息|
|[**describeCommitsBetweenCommitAndCommit**](#describecommitsbetweencommitandcommit) | **POST** /?action&#x3D;DescribeCommitsBetweenCommitAndCommit | Git提交-查询两个请求之间的请求列表（source target顺序正常）|
|[**describeConfigTemplateList**](#describeconfigtemplatelist) | **POST** /DescribeConfigTemplateList | 配置方案获取|
|[**describeDefectTypes**](#describedefecttypes) | **POST** /?action&#x3D;DescribeDefectTypes | 缺陷类型列表查询|
|[**describeDepartment**](#describedepartment) | **POST** /?action&#x3D;DescribeDepartment | 部门详情查询|
|[**describeDepartmentMembers**](#describedepartmentmembers) | **POST** /?action&#x3D;DescribeDepartmentMembers | 部门成员列表查询|
|[**describeDepotByNameInfo**](#describedepotbynameinfo) | **POST** /?action&#x3D;DescribeDepotByNameInfo | 仓库信息-查询项目下所有的仓库信息列表|
|[**describeDepotDefaultBranch**](#describedepotdefaultbranch) | **POST** /?action&#x3D;DescribeDepotDefaultBranch | 仓库分支-查询仓库的默认分支|
|[**describeDepotFilePushRules**](#describedepotfilepushrules) | **POST** /?action&#x3D;DescribeDepotFilePushRules | 仓库设置-查询git仓库文件推送规则|
|[**describeDepotMergeRequests**](#describedepotmergerequests) | **POST** /?action&#x3D;DescribeDepotMergeRequests | 合并请求-查询仓库合并请求列表|
|[**describeDepotPushSetting**](#describedepotpushsetting) | **POST** /?action&#x3D;DescribeDepotPushSetting | 仓库设置-查询仓库推送设置|
|[**describeDepotSpecDetail**](#describedepotspecdetail) | **POST** /?action&#x3D;DescribeDepotSpecDetail | 仓库设置-查询仓库规范详情|
|[**describeDepotSpecs**](#describedepotspecs) | **POST** /?action&#x3D;DescribeDepotSpecs | 仓库设置-查询仓库规范列表|
|[**describeDifferentBetween2Commits**](#describedifferentbetween2commits) | **POST** /?action&#x3D;DescribeDifferentBetween2Commits | Git提交-两次提交之间的文件差异（source target顺序正常）|
|[**describeDifferentBetweenTwoCommits**](#describedifferentbetweentwocommits) | **POST** /?action&#x3D;DescribeDifferentBetweenTwoCommits | Git提交-获取两次commit之间的文件差异详情(废弃，source target顺序不一致)|
|[**describeGitBlameInfo**](#describegitblameinfo) | **POST** /?action&#x3D;DescribeGitBlameInfo | Git提交-获取指定commit下某文件指定代码行的最后一次提交|
|[**describeGitBlob**](#describegitblob) | **POST** /?action&#x3D;DescribeGitBlob | Git文件-查询GitBlob|
|[**describeGitBlobRaw**](#describegitblobraw) | **POST** /?action&#x3D;DescribeGitBlobRaw | Git文件-查询Git Blob raw信息|
|[**describeGitBranch**](#describegitbranch) | **POST** /?action&#x3D;DescribeGitBranch | 仓库分支-查询代码仓库单个分支|
|[**describeGitBranchList**](#describegitbranchlist) | **POST** /?action&#x3D;DescribeGitBranchList | 仓库分支-查询仓库分支列表|
|[**describeGitBranches**](#describegitbranches) | **POST** /?action&#x3D;DescribeGitBranches | 仓库分支-查询仓库下所有分支列表|
|[**describeGitBranchesBySha**](#describegitbranchesbysha) | **POST** /?action&#x3D;DescribeGitBranchesBySha | 仓库分支-根据sha值查询所在分支|
|[**describeGitCommitComments**](#describegitcommitcomments) | **POST** /?action&#x3D;DescribeGitCommitComments | Git提交-获取commit评论|
|[**describeGitCommitDiff**](#describegitcommitdiff) | **POST** /?action&#x3D;DescribeGitCommitDiff | Git提交-查询某次提交的diff信息|
|[**describeGitCommitFilePathList**](#describegitcommitfilepathlist) | **POST** /?action&#x3D;DescribeGitCommitFilePathList | Git提交-查询仓库某次提交改动的文件路径列表|
|[**describeGitCommitInfo**](#describegitcommitinfo) | **POST** /?action&#x3D;DescribeGitCommitInfo | Git提交-查询单个请求详情信息|
|[**describeGitCommitInfos**](#describegitcommitinfos) | **POST** /?action&#x3D;DescribeGitCommitInfos | Git提交-查询仓库分支下提交列表|
|[**describeGitCommitNote**](#describegitcommitnote) | **POST** /?action&#x3D;DescribeGitCommitNote | Git提交-获取提交注释|
|[**describeGitCommitStatus**](#describegitcommitstatus) | **POST** /?action&#x3D;DescribeGitCommitStatus | Git提交-查询提交对应的流水线状态|
|[**describeGitCommitsInPage**](#describegitcommitsinpage) | **POST** /?action&#x3D;DescribeGitCommitsInPage | Git提交-查询仓库分支下提交列表|
|[**describeGitContributors**](#describegitcontributors) | **POST** /?action&#x3D;DescribeGitContributors | 仓库信息-查询git仓库的贡献者|
|[**describeGitDepot**](#describegitdepot) | **POST** /?action&#x3D;DescribeGitDepot | 仓库信息-根据代码仓库id获取代码仓库信息|
|[**describeGitDepotDeployKeys**](#describegitdepotdeploykeys) | **POST** /?action&#x3D;DescribeGitDepotDeployKeys | 仓库设置-查询某仓库下的部署公钥列表|
|[**describeGitFile**](#describegitfile) | **POST** /?action&#x3D;DescribeGitFile | Git文件-获取文件详情|
|[**describeGitFileContent**](#describegitfilecontent) | **POST** /?action&#x3D;DescribeGitFileContent | Git提交-查询某次提交某文件的内容|
|[**describeGitFileStat**](#describegitfilestat) | **POST** /?action&#x3D;DescribeGitFileStat | Git文件-检查仓库文件是否存在|
|[**describeGitFiles**](#describegitfiles) | **POST** /?action&#x3D;DescribeGitFiles | Git文件-查询仓库目录下文件和文件夹名字|
|[**describeGitMergeBase**](#describegitmergebase) | **POST** /?action&#x3D;DescribeGitMergeBase | 仓库分支-查询两个分支的公共祖先|
|[**describeGitMergeRequestDiffDetail**](#describegitmergerequestdiffdetail) | **POST** /?action&#x3D;DescribeGitMergeRequestDiffDetail | 合并请求-查询合并请求文件的 diff 详情|
|[**describeGitMergeRequestDiffs**](#describegitmergerequestdiffs) | **POST** /?action&#x3D;DescribeGitMergeRequestDiffs | 合并请求-查询合并请求diff信息的文件列表|
|[**describeGitMergeRequestParticipants**](#describegitmergerequestparticipants) | **POST** /DescribeGitMergeRequestParticipants | 合并请求-获取合并请求的参与者|
|[**describeGitMergeRequestsBySha**](#describegitmergerequestsbysha) | **POST** /?action&#x3D;DescribeGitMergeRequestsBySha | 合并请求-查询含有某次提交的合并请求|
|[**describeGitProjectDeployKeys**](#describegitprojectdeploykeys) | **POST** /?action&#x3D;DescribeGitProjectDeployKeys | 仓库设置-查询某项目下的部署公钥列表|
|[**describeGitProtectedTags**](#describegitprotectedtags) | **POST** /?action&#x3D;DescribeGitProtectedTags | 标签信息-查询受保护的标签列表|
|[**describeGitProtectedTagsByRule**](#describegitprotectedtagsbyrule) | **POST** /?action&#x3D;DescribeGitProtectedTagsByRule | 标签信息-根据标签保护规则查询受保护的标签列表|
|[**describeGitRef**](#describegitref) | **POST** /?action&#x3D;DescribeGitRef | 仓库分支-获取分支或标签信息|
|[**describeGitRefsBySha**](#describegitrefsbysha) | **POST** /?action&#x3D;DescribeGitRefsBySha | Git提交-查询含有某次提交的标签或分支列表|
|[**describeGitReleaseDetail**](#describegitreleasedetail) | **POST** /?action&#x3D;DescribeGitReleaseDetail | 版本信息-查询仓库的版本详情|
|[**describeGitReleases**](#describegitreleases) | **POST** /?action&#x3D;DescribeGitReleases | 版本信息-查询仓库的版本列表|
|[**describeGitTag**](#describegittag) | **POST** /?action&#x3D;DescribeGitTag | 标签信息-查询单个tag|
|[**describeGitTags**](#describegittags) | **POST** /?action&#x3D;DescribeGitTags | 标签信息-查询当前仓库下所有tags|
|[**describeGitTagsByBranch**](#describegittagsbybranch) | **POST** /?action&#x3D;DescribeGitTagsByBranch | 标签信息-根据分支获取标签列表|
|[**describeGitTagsBySha**](#describegittagsbysha) | **POST** /?action&#x3D;DescribeGitTagsBySha | 标签信息-查询含有某次提交的标签列表|
|[**describeGitTree**](#describegittree) | **POST** /?action&#x3D;DescribeGitTree | 仓库信息-查询git仓库的树|
|[**describeGrantObjectsOnResource**](#describegrantobjectsonresource) | **POST** /?action&#x3D;DescribeGrantObjectsOnResource | 授权对象列表分页查询|
|[**describeGrantUsersOnResource**](#describegrantusersonresource) | **POST** /?action&#x3D;DescribeGrantUsersOnResource | 授权用户列表分页查询|
|[**describeHostServerInstance**](#describehostserverinstance) | **POST** /?action&#x3D;DescribeHostServerInstance | CD 主机组部署详情获取|
|[**describeIssue**](#describeissue) | **POST** /DescribeIssue | 事项详情查询|
|[**describeIssueAttachmentPreSignedUrl**](#describeissueattachmentpresignedurl) | **POST** /?action&#x3D;DescribeIssueAttachmentPreSignedUrl | 预签名信息获取|
|[**describeIssueByStatusUpdate**](#describeissuebystatusupdate) | **POST** /DescribeIssueByStatusUpdate | 通过状态以及状态的更新时间查询事项列表|
|[**describeIssueCommentList**](#describeissuecommentlist) | **POST** /?action&#x3D;DescribeIssueCommentList | 事项评论列表查询|
|[**describeIssueCustomFieldLogList**](#describeissuecustomfieldloglist) | **POST** /DescribeIssueCustomFieldLogList | 事项的自定义属性变更日志查询|
|[**describeIssueFileUrl**](#describeissuefileurl) | **POST** /?action&#x3D;DescribeIssueFileUrl | 事项附件的下载地址查询|
|[**describeIssueFilterList**](#describeissuefilterlist) | **POST** /?action&#x3D;DescribeIssueFilterList | 事项筛选器列表查询|
|[**describeIssueList**](#describeissuelist) | **POST** /?action&#x3D;DescribeIssueList | 事项列表查询|
|[**describeIssueListWithPage**](#describeissuelistwithpage) | **POST** /DescribeIssueListWithPage | 事项查询,返回分页信息|
|[**describeIssueLogList**](#describeissueloglist) | **POST** /?action&#x3D;DescribeIssueLogList | 事项活动日志查询|
|[**describeIssueModuleList**](#describeissuemodulelist) | **POST** /DescribeIssueModuleList | 事项模块列表查询|
|[**describeIssueReferenceResources**](#describeissuereferenceresources) | **POST** /DescribeIssueReferenceResources | 事项的引用资源列表查询|
|[**describeIssueRelatedRepos**](#describeissuerelatedrepos) | **POST** /DescribeIssueRelatedRepos | 事项关联的代码仓库信息查询|
|[**describeIssueRelatedWorkItemList**](#describeissuerelatedworkitemlist) | **POST** /DescribeIssueRelatedWorkItemList | 事项关联的项目集中的工作项查询|
|[**describeIssueReleaseList**](#describeissuereleaselist) | **POST** /DescribeIssueReleaseList | 事项加入的版本查询|
|[**describeIssueStatusChangeLogList**](#describeissuestatuschangeloglist) | **POST** /DescribeIssueStatusChangeLogList | 事项的状态变更记录查询|
|[**describeIssueWorkLogList**](#describeissueworkloglist) | **POST** /DescribeIssueWorkLogList | 事项的工时日志查询|
|[**describeIteration**](#describeiteration) | **POST** /?action&#x3D;DescribeIteration | 迭代详情查询|
|[**describeIterationList**](#describeiterationlist) | **POST** /?action&#x3D;DescribeIterationList | 迭代列表获取|
|[**describeMemberSshKey**](#describemembersshkey) | **POST** /?action&#x3D;DescribeMemberSshKey | 仓库设置-获取团队成员的SSH公钥列表|
|[**describeMergeReqCommits**](#describemergereqcommits) | **POST** /?action&#x3D;DescribeMergeReqCommits | 合并请求-查询合并请求列表|
|[**describeMergeReqInfo**](#describemergereqinfo) | **POST** /?action&#x3D;DescribeMergeReqInfo | 合并请求-查询合并请求详情|
|[**describeMergeRequest**](#describemergerequest) | **POST** /?action&#x3D;DescribeMergeRequest | 合并请求-查询合并请求详情信息|
|[**describeMergeRequestFileDiff**](#describemergerequestfilediff) | **POST** /?action&#x3D;DescribeMergeRequestFileDiff | 合并请求-获取合并请求文件修改记录|
|[**describeMergeRequestLog**](#describemergerequestlog) | **POST** /?action&#x3D;DescribeMergeRequestLog | 合并请求-查询合并请求操作记录|
|[**describeMergeRequestReviewers**](#describemergerequestreviewers) | **POST** /?action&#x3D;DescribeMergeRequestReviewers | 合并请求-获取合并请求的评审者|
|[**describeMyDepots**](#describemydepots) | **POST** /?action&#x3D;DescribeMyDepots | 仓库信息-获取当前用户拥有读权限的仓库列表|
|[**describeNotesByCommits**](#describenotesbycommits) | **POST** /?action&#x3D;DescribeNotesByCommits | 仓库信息-获取提交的note信息|
|[**describeOneProject**](#describeoneproject) | **POST** /?action&#x3D;DescribeOneProject | 单个项目查询|
|[**describePersonalExternalDepots**](#describepersonalexternaldepots) | **POST** /?action&#x3D;DescribePersonalExternalDepots | 个人外部仓库获取|
|[**describePinyin**](#describepinyin) | **POST** /?action&#x3D;DescribePinyin | 汉字转拼音|
|[**describePoliciesOnResourceType**](#describepoliciesonresourcetype) | **POST** /?action&#x3D;DescribePoliciesOnResourceType | 权限组列表查询（指定资源类型）|
|[**describePolicy**](#describepolicy) | **POST** /?action&#x3D;DescribePolicy | 权限组详情获取|
|[**describePreSignUploadUrl**](#describepresignuploadurl) | **POST** /?action&#x3D;DescribePreSignUploadUrl | 预签名URL获取|
|[**describePredicatePolicyOnResource**](#describepredicatepolicyonresource) | **POST** /?action&#x3D;DescribePredicatePolicyOnResource | 资源权限判定模式获取|
|[**describeProgramProjects**](#describeprogramprojects) | **POST** /?action&#x3D;DescribeProgramProjects | 项目集下项目列表查询|
|[**describePrograms**](#describeprograms) | **POST** /?action&#x3D;DescribePrograms | 项目集列表查询|
|[**describeProjectAnnouncement**](#describeprojectannouncement) | **POST** /?action&#x3D;DescribeProjectAnnouncement | 项目公告查询|
|[**describeProjectAnnouncements**](#describeprojectannouncements) | **POST** /?action&#x3D;DescribeProjectAnnouncements | 项目公告列表查询|
|[**describeProjectByName**](#describeprojectbyname) | **POST** /?action&#x3D;DescribeProjectByName | 项目查询(通过项目名称)|
|[**describeProjectCredentials**](#describeprojectcredentials) | **POST** /?action&#x3D;DescribeProjectCredentials | 项目凭据列表查询|
|[**describeProjectDepotBranches**](#describeprojectdepotbranches) | **POST** /?action&#x3D;DescribeProjectDepotBranches | 仓库分支列表获取|
|[**describeProjectDepotCommits**](#describeprojectdepotcommits) | **POST** /?action&#x3D;DescribeProjectDepotCommits | 分支下的提交列表获取|
|[**describeProjectDepotInfoList**](#describeprojectdepotinfolist) | **POST** /?action&#x3D;DescribeProjectDepotInfoList | 仓库信息-查询项目下所有的仓库信息列表|
|[**describeProjectDepotTags**](#describeprojectdepottags) | **POST** /?action&#x3D;DescribeProjectDepotTags | 仓库的标签列表获取|
|[**describeProjectDepots**](#describeprojectdepots) | **POST** /?action&#x3D;DescribeProjectDepots | 项目仓库列表获取|
|[**describeProjectIssueFieldList**](#describeprojectissuefieldlist) | **POST** /?action&#x3D;DescribeProjectIssueFieldList | 具体事项类型的属性列表查询|
|[**describeProjectIssueStatusList**](#describeprojectissuestatuslist) | **POST** /?action&#x3D;DescribeProjectIssueStatusList | 具体事项类型的状态列表查询|
|[**describeProjectIssueTypeList**](#describeprojectissuetypelist) | **POST** /?action&#x3D;DescribeProjectIssueTypeList | 项目事项类型列表查询|
|[**describeProjectLabels**](#describeprojectlabels) | **POST** /?action&#x3D;DescribeProjectLabels | 项目列表查询-指定项目标签|
|[**describeProjectMemberPrincipals**](#describeprojectmemberprincipals) | **POST** /?action&#x3D;DescribeProjectMemberPrincipals | 项目成员主体查询(包含用户组、部门、成员)|
|[**describeProjectMembers**](#describeprojectmembers) | **POST** /?action&#x3D;DescribeProjectMembers | 项目成员列表查询|
|[**describeProjectMergeRequests**](#describeprojectmergerequests) | **POST** /?action&#x3D;DescribeProjectMergeRequests | 合并请求-获取项目下的合并请求列表|
|[**describeProjectRoles**](#describeprojectroles) | **POST** /?action&#x3D;DescribeProjectRoles | 项目用户组查询|
|[**describeProjectsByFeature**](#describeprojectsbyfeature) | **POST** /?action&#x3D;DescribeProjectsByFeature | 项目查询（通过一级菜单名）|
|[**describeProtectedBranch**](#describeprotectedbranch) | **POST** /?action&#x3D;DescribeProtectedBranch | 仓库设置-查询保护分支详情|
|[**describeProtectedBranchMembers**](#describeprotectedbranchmembers) | **POST** /?action&#x3D;DescribeProtectedBranchMembers | 仓库设置-查询保护分支成员|
|[**describeProtectedBranches**](#describeprotectedbranches) | **POST** /?action&#x3D;DescribeProtectedBranches | 仓库设置-查询保护分支列表|
|[**describeRelatedCaseList**](#describerelatedcaselist) | **POST** /DescribeRelatedCaseList | 事项关联的测试用例查询|
|[**describeRelease**](#describerelease) | **POST** /DescribeRelease | 版本详情查询|
|[**describeReleaseIssueList**](#describereleaseissuelist) | **POST** /DescribeReleaseIssueList | 版本发布范围查询|
|[**describeReleaseList**](#describereleaselist) | **POST** /DescribeReleaseList | 版本列表查询|
|[**describeReport**](#describereport) | **POST** /?action&#x3D;DescribeReport | 测试报告详情|
|[**describeReportList**](#describereportlist) | **POST** /?action&#x3D;DescribeReportList | 测试报告列表|
|[**describeRequirementDefectRelation**](#describerequirementdefectrelation) | **POST** /?action&#x3D;DescribeRequirementDefectRelation | 需求关联缺陷列表查询|
|[**describeRequirementTestCaseList**](#describerequirementtestcaselist) | **POST** /?action&#x3D;DescribeRequirementTestCaseList | 需求关联的测试用例列表|
|[**describeResourceReferencesCited**](#describeresourcereferencescited) | **POST** /?action&#x3D;DescribeResourceReferencesCited | 被引用资源列表查询|
|[**describeResourceReferencesCiting**](#describeresourcereferencesciting) | **POST** /?action&#x3D;DescribeResourceReferencesCiting | 引用资源列表查询|
|[**describeResourceScopeListOnPolicy**](#describeresourcescopelistonpolicy) | **POST** /?action&#x3D;DescribeResourceScopeListOnPolicy | 权限组可用资源范围分页查询|
|[**describeSelfMergeRequests**](#describeselfmergerequests) | **POST** /?action&#x3D;DescribeSelfMergeRequests | 合并请求-获取自己的合并请求列表|
|[**describeSingeMergeRequestNotes**](#describesingemergerequestnotes) | **POST** /?action&#x3D;DescribeSingeMergeRequestNotes | 合并请求-获取单个合并请求行评论和改动文件diff行评论|
|[**describeSshKey**](#describesshkey) | **POST** /?action&#x3D;DescribeSshKey | 仓库设置-获取当前用户所有SSH公钥|
|[**describeSubIssueList**](#describesubissuelist) | **POST** /?action&#x3D;DescribeSubIssueList | 子事项列表查询|
|[**describeTeam**](#describeteam) | **POST** /?action&#x3D;DescribeTeam | 团队信息查询|
|[**describeTeamAdminMembers**](#describeteamadminmembers) | **POST** /?action&#x3D;DescribeTeamAdminMembers | 团队管理员查询|
|[**describeTeamArtifacts**](#describeteamartifacts) | **POST** /?action&#x3D;DescribeTeamArtifacts | 制品列表查询|
|[**describeTeamDepotInfoList**](#describeteamdepotinfolist) | **POST** /?action&#x3D;DescribeTeamDepotInfoList | 仓库信息-获取团队下仓库列表，仅团队所有者或团队管理员可以调用。|
|[**describeTeamIssueTypeList**](#describeteamissuetypelist) | **POST** /?action&#x3D;DescribeTeamIssueTypeList | 企业事项类型列表查询|
|[**describeTeamIssues**](#describeteamissues) | **POST** /?action&#x3D;DescribeTeamIssues | 查询团队事项列表|
|[**describeTeamMember**](#describeteammember) | **POST** /?action&#x3D;DescribeTeamMember | 团队成员信息查询（通过用户 ID）|
|[**describeTeamMemberByEmail**](#describeteammemberbyemail) | **POST** /?action&#x3D;DescribeTeamMemberByEmail | 团队成员信息查询（通过用户 Email）|
|[**describeTeamMembers**](#describeteammembers) | **POST** /?action&#x3D;DescribeTeamMembers | 团队成员列表查询|
|[**describeTest**](#describetest) | **POST** /?action&#x3D;DescribeTest | 测试任务详情|
|[**describeTestCase**](#describetestcase) | **POST** /?action&#x3D;DescribeTestCase | 测试用例详情|
|[**describeTestCaseList**](#describetestcaselist) | **POST** /?action&#x3D;DescribeTestCaseList | 测试用例列表|
|[**describeTestCaseSectionList**](#describetestcasesectionlist) | **POST** /?action&#x3D;DescribeTestCaseSectionList | 测试用例分组列表|
|[**describeTestDefectList**](#describetestdefectlist) | **POST** /?action&#x3D;DescribeTestDefectList | 测试任务关联的缺陷列表|
|[**describeTestList**](#describetestlist) | **POST** /?action&#x3D;DescribeTestList | 测试任务列表|
|[**describeTestRun**](#describetestrun) | **POST** /?action&#x3D;DescribeTestRun | 测试计划详情|
|[**describeTestRunList**](#describetestrunlist) | **POST** /?action&#x3D;DescribeTestRunList | 测试计划列表|
|[**describeUserGroups**](#describeusergroups) | **POST** /?action&#x3D;DescribeUserGroups | 用户组列表分页查询|
|[**describeUserHandoverIssues**](#describeuserhandoverissues) | **POST** /DescribeUserHandoverIssues | 查询团队成员待交接事项列表|
|[**describeUserProjects**](#describeuserprojects) | **POST** /?action&#x3D;DescribeUserProjects | 项目列表查询（已加入的项目）|
|[**describeUsersByGroupId**](#describeusersbygroupid) | **POST** /?action&#x3D;DescribeUsersByGroupId | 用户列表查询（根据用户组id分页查询）|
|[**describeUsersOnResourceAndGrantObject**](#describeusersonresourceandgrantobject) | **POST** /?action&#x3D;DescribeUsersOnResourceAndGrantObject | 授权用户列表分页查询（指定资源）|
|[**describeWorkItemSalvage**](#describeworkitemsalvage) | **POST** /DescribeWorkItemSalvage | 事项分解信息查询|
|[**describeWorkbenchIssueList**](#describeworkbenchissuelist) | **POST** /DescribeWorkbenchIssueList | 用户在团队内的所有代办事项查询|
|[**detachFromResource**](#detachfromresource) | **POST** /?action&#x3D;DetachFromResource | 授权收回，只收回参数指定的授权，已有其它授权不受影响|
|[**detachResourceScopeOnPolicy**](#detachresourcescopeonpolicy) | **POST** /?action&#x3D;DetachResourceScopeOnPolicy | 权限组可用资源删除，只删除参数指定的资源，已有的其它资源不受影响|
|[**forbiddenArtifactVersion**](#forbiddenartifactversion) | **POST** /?action&#x3D;ForbiddenArtifactVersion | 制品版本下载 禁止、解禁|
|[**initProjectTemplate**](#initprojecttemplate) | **POST** /?action&#x3D;InitProjectTemplate | 项目配置方案初始化|
|[**modifyArtifactCredit**](#modifyartifactcredit) | **POST** /?action&#x3D;ModifyArtifactCredit | 制品授信清单修改|
|[**modifyArtifactProperties**](#modifyartifactproperties) | **POST** /?action&#x3D;ModifyArtifactProperties | 制品属性修改|
|[**modifyBranchProtection**](#modifybranchprotection) | **POST** /?action&#x3D;ModifyBranchProtection | 仓库设置-修改保护分支规则相关信息|
|[**modifyBranchProtectionMemberPermission**](#modifybranchprotectionmemberpermission) | **POST** /?action&#x3D;ModifyBranchProtectionMemberPermission | 仓库设置-更改保护分支管理员权限|
|[**modifyCdCloudAccount**](#modifycdcloudaccount) | **POST** /?action&#x3D;ModifyCdCloudAccount | CD 云账号更新|
|[**modifyCdHostServerGroup**](#modifycdhostservergroup) | **POST** /?action&#x3D;ModifyCdHostServerGroup | CD 主机组修改|
|[**modifyCdPipeline**](#modifycdpipeline) | **POST** /?action&#x3D;ModifyCdPipeline | CD 部署流程修改|
|[**modifyChooseDepotSpec**](#modifychoosedepotspec) | **POST** /?action&#x3D;ModifyChooseDepotSpec | 仓库设置-使用、取消使用仓库规范|
|[**modifyCloseMR**](#modifyclosemr) | **POST** /?action&#x3D;ModifyCloseMR | 合并请求-关闭合并请求|
|[**modifyCodingCIAgentEnable**](#modifycodingciagentenable) | **POST** /?action&#x3D;ModifyCodingCIAgentEnable | 自定义构建节点启用、禁用|
|[**modifyCodingCIJob**](#modifycodingcijob) | **POST** /?action&#x3D;ModifyCodingCIJob | 构建计划修改|
|[**modifyDefaultBranch**](#modifydefaultbranch) | **POST** /?action&#x3D;ModifyDefaultBranch | 仓库设置-修改仓库默认分支|
|[**modifyDefectRelatedRequirement**](#modifydefectrelatedrequirement) | **POST** /?action&#x3D;ModifyDefectRelatedRequirement | 缺陷所属的需求修改|
|[**modifyDepartment**](#modifydepartment) | **POST** /?action&#x3D;ModifyDepartment | 部门信息修改|
|[**modifyDepartmentAssignee**](#modifydepartmentassignee) | **POST** /?action&#x3D;ModifyDepartmentAssignee | 部门负责人管理|
|[**modifyDepartmentMember**](#modifydepartmentmember) | **POST** /?action&#x3D;ModifyDepartmentMember | 部门成员管理|
|[**modifyDepotDescription**](#modifydepotdescription) | **POST** /?action&#x3D;ModifyDepotDescription | 仓库信息-修改仓库描述|
|[**modifyDepotFilePushRule**](#modifydepotfilepushrule) | **POST** /?action&#x3D;ModifyDepotFilePushRule | 仓库设置-修改git仓库文件推送规则|
|[**modifyDepotFilePushRuleDenyPrivilege**](#modifydepotfilepushruledenyprivilege) | **POST** /?action&#x3D;ModifyDepotFilePushRuleDenyPrivilege | 仓库设置-修改 git 仓库特权者文件推送权限|
|[**modifyDepotLevelDepotSpec**](#modifydepotleveldepotspec) | **POST** /?action&#x3D;ModifyDepotLevelDepotSpec | 仓库设置-修改、新增仓库级别的仓库规范|
|[**modifyDepotName**](#modifydepotname) | **POST** /?action&#x3D;ModifyDepotName | 仓库信息-修改仓库名称|
|[**modifyDepotPushSetting**](#modifydepotpushsetting) | **POST** /?action&#x3D;ModifyDepotPushSetting | 仓库设置-修改仓库推送设置|
|[**modifyDepotQuota**](#modifydepotquota) | **POST** /?action&#x3D;ModifyDepotQuota | 仓库信息-修改仓库容量|
|[**modifyDepotSettings**](#modifydepotsettings) | **POST** /?action&#x3D;ModifyDepotSettings | 仓库设置-修改仓库设置|
|[**modifyDepotSharedSetting**](#modifydepotsharedsetting) | **POST** /?action&#x3D;ModifyDepotSharedSetting | 仓库设置-修改仓库是否开源设置|
|[**modifyGitCherryPick**](#modifygitcherrypick) | **POST** /?action&#x3D;ModifyGitCherryPick | Git提交-将某次提交cherry-pick到指定分支|
|[**modifyGitCommitRevert**](#modifygitcommitrevert) | **POST** /?action&#x3D;ModifyGitCommitRevert | Git提交-还原某次提交|
|[**modifyGitCommitStatus**](#modifygitcommitstatus) | **POST** /?action&#x3D;ModifyGitCommitStatus | Git提交-修改提交对应的流水线状态|
|[**modifyGitDepotArchive**](#modifygitdepotarchive) | **POST** /?action&#x3D;ModifyGitDepotArchive | 仓库设置-仓库归档|
|[**modifyGitDepotUnarchive**](#modifygitdepotunarchive) | **POST** /?action&#x3D;ModifyGitDepotUnarchive | 仓库设置-仓库解除归档|
|[**modifyGitFiles**](#modifygitfiles) | **POST** /?action&#x3D;ModifyGitFiles | Git提交-修改仓库某文件|
|[**modifyGitMergeBranch**](#modifygitmergebranch) | **POST** /?action&#x3D;ModifyGitMergeBranch | 合并请求-将源分支的改动合并到目标分支|
|[**modifyGitMergeRequest**](#modifygitmergerequest) | **POST** /?action&#x3D;ModifyGitMergeRequest | 合并请求-修改合并请求的标题和描述信息|
|[**modifyGitMergeRequestRebase**](#modifygitmergerequestrebase) | **POST** /?action&#x3D;ModifyGitMergeRequestRebase | 合并请求-合并请求中的源分支进行rebase操作|
|[**modifyGitRebase**](#modifygitrebase) | **POST** /?action&#x3D;ModifyGitRebase | 仓库信息-git变基操作|
|[**modifyGitRelease**](#modifygitrelease) | **POST** /?action&#x3D;ModifyGitRelease | 版本信息-修改仓库版本信息|
|[**modifyGitTransfer**](#modifygittransfer) | **POST** /?action&#x3D;ModifyGitTransfer | 仓库信息-仓库转移至同团队下的其他项目中|
|[**modifyIssue**](#modifyissue) | **POST** /ModifyIssue | 事项修改|
|[**modifyIssueComment**](#modifyissuecomment) | **POST** /?action&#x3D;ModifyIssueComment | 事项评论修改|
|[**modifyIssueDescription**](#modifyissuedescription) | **POST** /?action&#x3D;ModifyIssueDescription | 事项描述修改|
|[**modifyIssueParentRequirement**](#modifyissueparentrequirement) | **POST** /?action&#x3D;ModifyIssueParentRequirement | 事项父需求修改|
|[**modifyIteration**](#modifyiteration) | **POST** /?action&#x3D;ModifyIteration | 迭代修改|
|[**modifyIterationStatus**](#modifyiterationstatus) | **POST** /?action&#x3D;ModifyIterationStatus | 修改迭代状态|
|[**modifyMergeMR**](#modifymergemr) | **POST** /?action&#x3D;ModifyMergeMR | 合并信息-执行合并|
|[**modifyMergeRequestBasicSettings**](#modifymergerequestbasicsettings) | **POST** /?action&#x3D;ModifyMergeRequestBasicSettings | 仓库设置-修改合并请求基础设置|
|[**modifyMergeRequestMergeCommitMessageTemplate**](#modifymergerequestmergecommitmessagetemplate) | **POST** /?action&#x3D;ModifyMergeRequestMergeCommitMessageTemplate | 仓库设置-修改合并请求合并提交消息模版|
|[**modifyMergeRequestSquashCommitMessageTemplate**](#modifymergerequestsquashcommitmessagetemplate) | **POST** /?action&#x3D;ModifyMergeRequestSquashCommitMessageTemplate | 仓库设置-修改合并请求合并压缩提交消息模版|
|[**modifyPolicy**](#modifypolicy) | **POST** /?action&#x3D;ModifyPolicy | 权限组修改|
|[**modifyProject**](#modifyproject) | **POST** /?action&#x3D;ModifyProject | 项目信息修改|
|[**modifyProjectAnnouncement**](#modifyprojectannouncement) | **POST** /?action&#x3D;ModifyProjectAnnouncement | 项目公告更新|
|[**modifyProjectLabel**](#modifyprojectlabel) | **POST** /?action&#x3D;ModifyProjectLabel | 项目标签修改|
|[**modifyRelease**](#modifyrelease) | **POST** /ModifyRelease | 版本修改|
|[**modifyTeamLevelDepotSpec**](#modifyteamleveldepotspec) | **POST** /?action&#x3D;ModifyTeamLevelDepotSpec | 仓库设置-修改、新增团队级别的仓库规范|
|[**modifyTeamMemberLocked**](#modifyteammemberlocked) | **POST** /?action&#x3D;ModifyTeamMemberLocked | 团队成员锁定|
|[**modifyTeamMemberUnlocked**](#modifyteammemberunlocked) | **POST** /?action&#x3D;ModifyTeamMemberUnlocked | 团队成员解锁|
|[**modifyTestCase**](#modifytestcase) | **POST** /?action&#x3D;ModifyTestCase | 测试用例修改|
|[**modifyTestCaseSection**](#modifytestcasesection) | **POST** /?action&#x3D;ModifyTestCaseSection | 测试用例分组修改|
|[**modifyTestRun**](#modifytestrun) | **POST** /?action&#x3D;ModifyTestRun | 测试计划修改|
|[**modifyWorkItemSplitIssues**](#modifyworkitemsplitissues) | **POST** /ModifyWorkItemSplitIssues | 项目集工作项分解&amp;取消分解到项目中的事项|
|[**planIterationIssue**](#planiterationissue) | **POST** /?action&#x3D;PlanIterationIssue | 迭代批量规划|
|[**releaseArtifactVersion**](#releaseartifactversion) | **POST** /?action&#x3D;ReleaseArtifactVersion | 制品版本发布|
|[**reorderCdPipelines**](#reordercdpipelines) | **POST** /?action&#x3D;ReorderCdPipelines | 部署流程重排序|
|[**setGrantToResource**](#setgranttoresource) | **POST** /?action&#x3D;SetGrantToResource | 授权设置，收回授权体在资源中的所有授权，重新设置为参数指定的授权|
|[**setPredicatePolicyOnResource**](#setpredicatepolicyonresource) | **POST** /?action&#x3D;SetPredicatePolicyOnResource | 资源权限判定策略设置|
|[**stopCodingCIBuild**](#stopcodingcibuild) | **POST** /?action&#x3D;StopCodingCIBuild | 构建停止|
|[**triggerCdPipeline**](#triggercdpipeline) | **POST** /?action&#x3D;TriggerCdPipeline | 部署流程触发|
|[**triggerCodingCIBuild**](#triggercodingcibuild) | **POST** /?action&#x3D;TriggerCodingCIBuild | 构建触发|
|[**updateUserGroupById**](#updateusergroupbyid) | **POST** /?action&#x3D;UpdateUserGroupById | 用户组更新|

# **archiveTestRun**
> ArchiveTestRun200Response archiveTestRun()

✨ 测试计划归档

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ArchiveTestRunRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let archiveTestRunRequest: ArchiveTestRunRequest; // (optional)

const { status, data } = await apiInstance.archiveTestRun(
    archiveTestRunRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **archiveTestRunRequest** | **ArchiveTestRunRequest**|  | |


### Return type

**ArchiveTestRun200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **attachResourceScopeToPolicy**
> DeleteCdHostServerGroup200Response attachResourceScopeToPolicy()

✨ 为指定权限组添加可用的资源，原有其它资源不受影响，若已存在的资源不再进行追加

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    AttachResourceScopeToPolicyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let attachResourceScopeToPolicyRequest: AttachResourceScopeToPolicyRequest; // (optional)

const { status, data } = await apiInstance.attachResourceScopeToPolicy(
    attachResourceScopeToPolicyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **attachResourceScopeToPolicyRequest** | **AttachResourceScopeToPolicyRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **attachToResource**
> DeleteCdHostServerGroup200Response attachToResource()

✨ 授权追加，原有其它授权不受影响，若授权已存在不再进行追加

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DetachFromResourceRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let detachFromResourceRequest: DetachFromResourceRequest; // (optional)

const { status, data } = await apiInstance.attachToResource(
    detachFromResourceRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **detachFromResourceRequest** | **DetachFromResourceRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bindCdApplicationToProject**
> DeleteCdHostServerGroup200Response bindCdApplicationToProject()

✨ 绑定 CD 应用到项目

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    BindCdApplicationToProjectRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let bindCdApplicationToProjectRequest: BindCdApplicationToProjectRequest; // (optional)

const { status, data } = await apiInstance.bindCdApplicationToProject(
    bindCdApplicationToProjectRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bindCdApplicationToProjectRequest** | **BindCdApplicationToProjectRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **boundExternalDepot**
> DeleteCdHostServerGroup200Response boundExternalDepot()

✨ 关联外部仓库

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    BoundExternalDepotRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let boundExternalDepotRequest: BoundExternalDepotRequest; // (optional)

const { status, data } = await apiInstance.boundExternalDepot(
    boundExternalDepotRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **boundExternalDepotRequest** | **BoundExternalDepotRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cancelCdPipeline**
> DeleteCdHostServerGroup200Response cancelCdPipeline()

✨ 取消执行中的 CD 部署流程

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CancelCdPipelineRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let cancelCdPipelineRequest: CancelCdPipelineRequest; // (optional)

const { status, data } = await apiInstance.cancelCdPipeline(
    cancelCdPipelineRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cancelCdPipelineRequest** | **CancelCdPipelineRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clearCodingCIJobCache**
> DeleteCdHostServerGroup200Response clearCodingCIJobCache()

✨ 清理构建计划缓存

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ClearCodingCIJobCacheRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let clearCodingCIJobCacheRequest: ClearCodingCIJobCacheRequest; // (optional)

const { status, data } = await apiInstance.clearCodingCIJobCache(
    clearCodingCIJobCacheRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clearCodingCIJobCacheRequest** | **ClearCodingCIJobCacheRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createArtifactCredit**
> CreateArtifactCredit200Response createArtifactCredit()

✨ 制品授信清单创建

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateArtifactCreditRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createArtifactCreditRequest: CreateArtifactCreditRequest; // (optional)

const { status, data } = await apiInstance.createArtifactCredit(
    createArtifactCreditRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createArtifactCreditRequest** | **CreateArtifactCreditRequest**|  | |


### Return type

**CreateArtifactCredit200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 正常返回 |  -  |
|**401** | Invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createArtifactProperties**
> DeleteCdHostServerGroup200Response createArtifactProperties()

✨ 制品属性新增（指定版本）

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyArtifactPropertiesRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyArtifactPropertiesRequest: ModifyArtifactPropertiesRequest; // (optional)

const { status, data } = await apiInstance.createArtifactProperties(
    modifyArtifactPropertiesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyArtifactPropertiesRequest** | **ModifyArtifactPropertiesRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createArtifactRepository**
> CreateArtifactRepository200Response createArtifactRepository()

✨ 制品仓库创建

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateArtifactRepositoryRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createArtifactRepositoryRequest: CreateArtifactRepositoryRequest; // (optional)

const { status, data } = await apiInstance.createArtifactRepository(
    createArtifactRepositoryRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createArtifactRepositoryRequest** | **CreateArtifactRepositoryRequest**|  | |


### Return type

**CreateArtifactRepository200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createAttachmentPrepareSignUrl**
> CreateAttachmentPrepareSignUrl200Response createAttachmentPrepareSignUrl()

✨ 生成附件预上传信息

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateAttachmentPrepareSignUrlRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createAttachmentPrepareSignUrlRequest: CreateAttachmentPrepareSignUrlRequest; // (optional)

const { status, data } = await apiInstance.createAttachmentPrepareSignUrl(
    createAttachmentPrepareSignUrlRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createAttachmentPrepareSignUrlRequest** | **CreateAttachmentPrepareSignUrlRequest**|  | |


### Return type

**CreateAttachmentPrepareSignUrl200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createBinaryFiles**
> CreateBinaryFiles200Response createBinaryFiles()

✨ Git仓库创建二进制文件，文件总大小不能超过10Mb

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateBinaryFilesRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createBinaryFilesRequest: CreateBinaryFilesRequest; // (optional)

const { status, data } = await apiInstance.createBinaryFiles(
    createBinaryFilesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createBinaryFilesRequest** | **CreateBinaryFilesRequest**|  | |


### Return type

**CreateBinaryFiles200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createBranchProtection**
> DeleteCdHostServerGroup200Response createBranchProtection()

✨ 新增代码保护规则

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateBranchProtectionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createBranchProtectionRequest: CreateBranchProtectionRequest; // (optional)

const { status, data } = await apiInstance.createBranchProtection(
    createBranchProtectionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createBranchProtectionRequest** | **CreateBranchProtectionRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createBranchProtectionMember**
> DeleteCdHostServerGroup200Response createBranchProtectionMember()

✨ 新增保护分支规则管理员

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateBranchProtectionMemberRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createBranchProtectionMemberRequest: CreateBranchProtectionMemberRequest; // (optional)

const { status, data } = await apiInstance.createBranchProtectionMember(
    createBranchProtectionMemberRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createBranchProtectionMemberRequest** | **CreateBranchProtectionMemberRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createCaseResult**
> DeleteCdHostServerGroup200Response createCaseResult()

✨ 测试用例添加测试结果

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateCaseResultRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createCaseResultRequest: CreateCaseResultRequest; // (optional)

const { status, data } = await apiInstance.createCaseResult(
    createCaseResultRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCaseResultRequest** | **CreateCaseResultRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createCdCloudAccount**
> CreateCdCloudAccount200Response createCdCloudAccount()

✨ CD 云账号添加

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateCdCloudAccountRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createCdCloudAccountRequest: CreateCdCloudAccountRequest; // (optional)

const { status, data } = await apiInstance.createCdCloudAccount(
    createCdCloudAccountRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCdCloudAccountRequest** | **CreateCdCloudAccountRequest**|  | |


### Return type

**CreateCdCloudAccount200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createCdHostServerGroup**
> CreateCdHostServerGroup200Response createCdHostServerGroup()

✨ CD 主机组添加

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateCdHostServerGroupRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createCdHostServerGroupRequest: CreateCdHostServerGroupRequest; // (optional)

const { status, data } = await apiInstance.createCdHostServerGroup(
    createCdHostServerGroupRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCdHostServerGroupRequest** | **CreateCdHostServerGroupRequest**|  | |


### Return type

**CreateCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createCdPipeline**
> CreateCdPipeline200Response createCdPipeline()

✨ CD 部署流程创建

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateCdPipelineRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createCdPipelineRequest: CreateCdPipelineRequest; // (optional)

const { status, data } = await apiInstance.createCdPipeline(
    createCdPipelineRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCdPipelineRequest** | **CreateCdPipelineRequest**|  | |


### Return type

**CreateCdPipeline200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createCdTask**
> CreateCdTask200Response createCdTask()

✨ CD 任务执行

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateCdTaskRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createCdTaskRequest: CreateCdTaskRequest; // (optional)

const { status, data } = await apiInstance.createCdTask(
    createCdTaskRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCdTaskRequest** | **CreateCdTaskRequest**|  | |


### Return type

**CreateCdTask200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createCodingCIJob**
> CreateCodingCIJob200Response createCodingCIJob()

✨ 创建构建计划

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateCodingCIJobRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createCodingCIJobRequest: CreateCodingCIJobRequest; // (optional)

const { status, data } = await apiInstance.createCodingCIJob(
    createCodingCIJobRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCodingCIJobRequest** | **CreateCodingCIJobRequest**|  | |


### Return type

**CreateCodingCIJob200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createCodingCIJobByTeamTemplate**
> CreateCodingCIJobByTeamTemplate200Response createCodingCIJobByTeamTemplate()

✨ 根据团队模版创建构建计划

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateCodingCIJobByTeamTemplateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createCodingCIJobByTeamTemplateRequest: CreateCodingCIJobByTeamTemplateRequest; // (optional)

const { status, data } = await apiInstance.createCodingCIJobByTeamTemplate(
    createCodingCIJobByTeamTemplateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCodingCIJobByTeamTemplateRequest** | **CreateCodingCIJobByTeamTemplateRequest**|  | |


### Return type

**CreateCodingCIJobByTeamTemplate200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 正常返回 |  -  |
|**401** | Invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createCodingProject**
> CreateCodingProject200Response createCodingProject()

✨ Coding项目创建

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateCodingProjectRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createCodingProjectRequest: CreateCodingProjectRequest; // (optional)

const { status, data } = await apiInstance.createCodingProject(
    createCodingProjectRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCodingProjectRequest** | **CreateCodingProjectRequest**|  | |


### Return type

**CreateCodingProject200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createDepartment**
> CreateDepartment200Response createDepartment()

✨ 部门创建

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateDepartmentRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createDepartmentRequest: CreateDepartmentRequest; // (optional)

const { status, data } = await apiInstance.createDepartment(
    createDepartmentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createDepartmentRequest** | **CreateDepartmentRequest**|  | |


### Return type

**CreateDepartment200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 正常返回 |  -  |
|**401** | Invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createDepotByTemplate**
> CreateDepotByTemplate200Response createDepotByTemplate()

✨ 根据模板创建仓库

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateDepotByTemplateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createDepotByTemplateRequest: CreateDepotByTemplateRequest; // (optional)

const { status, data } = await apiInstance.createDepotByTemplate(
    createDepotByTemplateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createDepotByTemplateRequest** | **CreateDepotByTemplateRequest**|  | |


### Return type

**CreateDepotByTemplate200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createDepotFilePushRule**
> DeleteDepotFilePushRuleDenyPrivilege200Response createDepotFilePushRule()

✨ 新增 git 仓库文件推送规则

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateDepotFilePushRuleRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createDepotFilePushRuleRequest: CreateDepotFilePushRuleRequest; // (optional)

const { status, data } = await apiInstance.createDepotFilePushRule(
    createDepotFilePushRuleRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createDepotFilePushRuleRequest** | **CreateDepotFilePushRuleRequest**|  | |


### Return type

**DeleteDepotFilePushRuleDenyPrivilege200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createDepotFilePushRulePrivilege**
> DeleteDepotFilePushRuleDenyPrivilege200Response createDepotFilePushRulePrivilege()

✨ 新增git仓库文件推送规则特权者

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyDepotFilePushRuleDenyPrivilegeRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyDepotFilePushRuleDenyPrivilegeRequest: ModifyDepotFilePushRuleDenyPrivilegeRequest; // (optional)

const { status, data } = await apiInstance.createDepotFilePushRulePrivilege(
    modifyDepotFilePushRuleDenyPrivilegeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyDepotFilePushRuleDenyPrivilegeRequest** | **ModifyDepotFilePushRuleDenyPrivilegeRequest**|  | |


### Return type

**DeleteDepotFilePushRuleDenyPrivilege200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createFile**
> CreateFile200Response createFile()

✨ \"    文件上传        1. 获取预签名URL          Action： 固定为 DescribePreSignUploadUrl   ProjectName: 项目名称   ContentType: 内容类型，和web端的文件上传时content-type是一样的。可以参考web端上传文件时，Http Header: Content-Type   FolderType :文件夹类型，0: 常规文件夹, 1:隐藏文件夹。 如果是用于项目协同上传附件的场景，配置为1；如果是上传到文件网盘则配置为0。   FolderId:  若上传项目协同附件场景时，不需要配置或默认为0即可。若用于上传到文件网盘，可以设置文件夹ID, 用于文件存放位置，ID值通过  open api 【创建文件夹】获取。   FileName: 保存的文件名。     POST https://e.coding.net/open-api   Accept: application/json   Authorization: token 79dfe***     {       \"Action\":\"DescribePreSignUploadUrl\",       \"ProjectName\":\"zhishiguanli\",       \"FolderId\":0,       \"FolderType\":1,       \"FileName\": \"20220727_1.csv\",       \"ContentType\": \"image/jpeg\"     }      响应数据:   UploadLink: 上传文件的URL   StorageKey: 上传到存储的文件路径   AuthToken: 用于校验身份数据的token，后续接口中使用   headers: 上传时需要的token信息          ```     {       \"Response\": {         \"RequestId\": \"99b1fbfb-8477-44b3-b19f-35acbcdbdf77\",         \"Data\": {           \"UploadLink\": \"https://coding-net-production-file-1257242599.cos.ap-shanghai.myqcloud.com/c69883ec-4ae6-45eb-a28d-b73dcfa83d02.csv?sign=q-sign-algorithm%3Dsha1%26q-ak%3DAKID7B14xvfnJxWtNpV95c1sAqIwms4_GnHMa-eCuULWfvXWTqp0qv8czbirX1BlXEXd%26q-sign-time%3D1661352589%3B1661354389%26q-key-time%3D1661352589%3B1661354389%26q-header-list%3Dhost%26q-url-param-list%3D%26q-signature%3D337c3118dd1385d33f5ada4c0492755ac7d00419\",           \"StorageKey\": \"c69883ec-4ae6-45eb-a28d-b73dcfa83d02.csv\",           \"Headers\": \"{\\\"x-cos-security-token\\\":\\\"0ZVlbeAyb6cqcbI2HcZg75xppfMACLPac9f0c5517a5d13d9731b0adb708c2ecdhK1-UdtMEqc-XpsQW5v1bB1BGeHXMlwutOM24SaUfX6lSP531QDfVrKJzLl8-NpCgKZfUE_-_Pg29lfqSvWpbd0D-4pENoBL5IDhkXO1RmmDncvxbwm_aMGRMlPL3YwQEyjPGv8KJ36ZUDm1k5ERnKYf2_OllQtoW5lSeRRnvCQUd7cAvvzSIl6WD-VxXJ2N9jX5Z_bh6B9zFXtCWjr0is550-QaLSM32V0NP0wPV4bBy9PwNLA32gxhsf24dfUZZsBZZVF67lfFGWgcK7SuZRrE_QPiEd9L4et-4KxBj4pXsAxCTWmATrcAonNq6xJ-\\\"}\",           \"AuthToken\": \"819321faa15086676c9c474b8823d6ce67aa4ec907a4e8a37fa396f990bd610c\"         }       }     }     ```                         2. 上传文件CreateFile     这个步骤需要客户端自己完成。     上传URL 可以参考 项目协同中描述内容中的上传文件的 COS URL。          2.1 COS上传   参考脚本如下:   #!/bin/bash          file=本地文件路径     storageKey=返回的StorageKey     url=https://域名/${storageKey}               # 腾讯云COS上传 curl, 注意Authorization值为sign参数，经过urldecode转化后的值。x-cos-security-token 使用 响应中的Headers中返回的值，          curl -X PUT \"${url}\" \\     -H \'Authorization:q-sign-algorithm=sha1&q-ak=AKIDr0xilQrTFEUhvpLvJ9Ro3Ds_REhKTtYv-dXFbNBY8w1aDZR7rpUNPq6hXn_SdANN&q-sign-time=1661351394;1661353194&q-key-time=1661351394;1661353194&q-header-list=host&q-url-param-list=&q-signature=2574959eebb2ddf7dd5e6e19f30126c7a63cec58\' \\     -H \'x-cos-security-token:0ZVlbeAyb6cqcbI2HcZg75xppfMACLPaba476ee7278aba618b8794dcf090c81fhK1-UdtMEqc-XpsQW5v1bHRl8XcitKZd-0CGmDfln5OqFJigfAursov8MRS8h_abNT0Bns7F7D5tN26wXra6oBlvhxZ4wU11Zk2peuDXq4eWSUWOCtvf-3IaxoCs2KEwMtSFcds1byn_00Zj2YxG8ajHQrVT6Gtry9PW3ULfNe-YPpWaX_XArXpoyjWuaXpBjIFvEhR5sB0gGSTtyXhf9S6wWJAisNlwvOls5xAdnNRHJWyt8Td_f-Lc6yYIXV-aD9ZoGyl5NEQcxEip7GQRtb-p8QD9MG_rfYsJiQ0blMGQQGzexo7YHRhRTws6dlXU\' \\     -H \'user-agent:tencentcloud-cos-postman\' \\     -H \'cosclientagent:cos_mc_v4\' \\     -H \'cosclientip:219.136.173.47\' -T \"${file}\"                    2.2 minio上传     minio 上传脚本DEMO如下：     bucket=file-storage     file=\'～/Downloads/测试简单格式1.md (2).zip\'          # 测试导入1.zip          storageKey=c5318506-8807-4612-9ad8-d751c863983d.zip     s3_key=***     s3_secret=***     host=minio.nh51daup.dev.coding.io          resource=\"/${bucket}/${storageKey}\"          # content_type=\"application/octet-stream\"          content_type=\"application/zip\"     date=`date -R`     _signature=\"PUT\\n\\n${content_type}\\n${date}\\n${resource}\"     signature=`echo -en ${_signature} | openssl sha1 -hmac ${s3_secret} -binary | base64`          # minio文件上传 curl 命令          curl -X PUT -T \"${file}\" \\   -H \"Host: ${host}\" \\   -H \"Date: ${date}\" \\   -H \"Content-Type: ${content_type}\" \\   -H \"Authorization: AWS ${s3_key}:${signature}\" \\     http://${host}${resource}          3. 保存文件   StorageKey: 获取预签名URL接口返回的 StorageKey   AuthToken: 获取预签名URL接口返回的 AuthToken          POST https://e.coding.net/open-api   Accept: application/json   Authorization: token 79dfe1d**ab          {       \"Action\":\"CreateFile\",       \"StorageKey\": \"2bdb7eea-57b4-495d-a5d0-67446822cea5.csv\",       \"AuthToken\": \"76ee1e30ef6df0552f0bd939f1f0359510d60d1806028f5c64fa31c116cf3f22\"     }         响应数据格式:   Id: 保存后的文件ID。   Name: 保存后的文件名称          ```     {       \"Response\": {         \"RequestId\": \"9958d6b7-ead6-4674-9ae8-21cd3054282b\",         \"Data\": {           \"Id\": 28909581,           \"Name\": \"20220727_1.csv\"         }       }     }     ```                    4. 创建事项DEMO     更详细参数说明参考open api文档   ProjectName: 项目名称     Name： 事项名称   FileIds: 数组类型，CreateFile 后响应的ID列表               POST https://e.coding.net/open-api   Accept: application/json   Authorization: token 79dfe1d9e53a2**e0ddc57ab          ```     {       \"Action\":\"CreateIssue\",       \"ProjectName\":\"zhishiguanli\",       \"Type\":\"DEFECT\",       \"Name\":\"需求清221101\",       \"Priority\":\"0\",       \"FileIds\":[28909581]     }     ```               4.1 项目协同需求描述图片同步方案          ## 方案一          需求系统在通过 OpenAPI 写入 CODING 需求时，通过正则方式提取所有图片，调用 CODING OpenAPI 上传图片到文件网盘，再替换需求内图片地址。     方案前提：     需求系统展示需求数据来源客户需求系统。     具体步骤：          1. 需求系统创建或更新图片时，调用 COIDNG 项目协同创建或编辑 OpenAPI     2. 获取需求系统需求描述     3. 正则提取图片地址     4. 调用 CODING OpenAPI 上传图片到文件网盘，获取到文件 ID     5. 通过文件 ID 和项目 ID 拼接成 CODING 图片相对地址，/api/project/{projectId}/files/{imageFileId}/imagePreview     6. 保存到 CODING 系统前，通过字符替换原图片地址为/api/project/{projectId}/files/{imageFileId}/imagePreview     7. 完成          ## 方案二          CODING 侧在项目协同 OpenAPI 创建或者编辑需求时，将外站图片地址转存（或者不过滤）。          ## 结论          方案一，无需依赖 CODING 更新，可直接开始。     方案二，需要依赖 CODING 更新，正在评估预计时间。          5. 创建文件夹     该接口可用于文件网盘中创建文件夹。   ProjectName: 项目名称   FoldName: 文件夹名称   ParentId: 父文件夹ID,如果是根路径，传 0。     POST https://e.coding.net/open-api   Accept: application/json   Authorization: token 79dfe1d9**a6e0ddc57ab          ```     {       \"Action\":\"CreateFolder\",       \"ProjectName\":\"zhishiguanli\",       \"FoldName\": \"Hello-sub-test-1\",       \"ParentId\": 0     }     ```          响应：          ```     {       \"Response\": {         \"RequestId\": \"e48d9d36-7473-4fac-b005-6fdc46afa69f\",         \"Data\": {           \"Id\": 28909737,           \"Name\": \"Hello-sub-test-1\"         }       }     }     ```       \"

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateFileRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createFileRequest: CreateFileRequest; // (optional)

const { status, data } = await apiInstance.createFile(
    createFileRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createFileRequest** | **CreateFileRequest**|  | |


### Return type

**CreateFile200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 正常返回 |  -  |
|**401** | Invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createFolder**
> CreateFolder200Response createFolder()

✨ 文件夹创建

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateFolderRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createFolderRequest: CreateFolderRequest; // (optional)

const { status, data } = await apiInstance.createFolder(
    createFolderRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createFolderRequest** | **CreateFolderRequest**|  | |


### Return type

**CreateFolder200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 正常返回 |  -  |
|**401** | Invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createGitBranch**
> DeleteCdHostServerGroup200Response createGitBranch()

✨ 用于代码仓库新建分支

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateGitBranchRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createGitBranchRequest: CreateGitBranchRequest; // (optional)

const { status, data } = await apiInstance.createGitBranch(
    createGitBranchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createGitBranchRequest** | **CreateGitBranchRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createGitCommit**
> CreateGitCommit200Response createGitCommit()

✨ 创建一次提交

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateGitCommitRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createGitCommitRequest: CreateGitCommitRequest; // (optional)

const { status, data } = await apiInstance.createGitCommit(
    createGitCommitRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createGitCommitRequest** | **CreateGitCommitRequest**|  | |


### Return type

**CreateGitCommit200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createGitCommitComment**
> CreateGitCommitComment200Response createGitCommitComment()

✨ 为某次提交创建一条评论

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateGitCommitCommentRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createGitCommitCommentRequest: CreateGitCommitCommentRequest; // (optional)

const { status, data } = await apiInstance.createGitCommitComment(
    createGitCommitCommentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createGitCommitCommentRequest** | **CreateGitCommitCommentRequest**|  | |


### Return type

**CreateGitCommitComment200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createGitCommitNote**
> DeleteCdHostServerGroup200Response createGitCommitNote()

✨ 创建提交注释,注意：对于 NotesRef 参数建议默认为空，因为 git 会使用默认的 ref ：refs/notes/commits，如果填了这个参数，会用这个参数指定的 ref 来保存您的 git note，有可能会覆盖您原有的 ref。

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateGitCommitNoteRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createGitCommitNoteRequest: CreateGitCommitNoteRequest; // (optional)

const { status, data } = await apiInstance.createGitCommitNote(
    createGitCommitNoteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createGitCommitNoteRequest** | **CreateGitCommitNoteRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createGitDeployKey**
> DeleteCdHostServerGroup200Response createGitDeployKey()

✨ 新建部署公钥

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateGitDeployKeyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createGitDeployKeyRequest: CreateGitDeployKeyRequest; // (optional)

const { status, data } = await apiInstance.createGitDeployKey(
    createGitDeployKeyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createGitDeployKeyRequest** | **CreateGitDeployKeyRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createGitDepot**
> CreateGitDepot200Response createGitDepot()

✨ 创建代码仓库

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateGitDepotRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createGitDepotRequest: CreateGitDepotRequest; // (optional)

const { status, data } = await apiInstance.createGitDepot(
    createGitDepotRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createGitDepotRequest** | **CreateGitDepotRequest**|  | |


### Return type

**CreateGitDepot200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createGitFiles**
> CreateGitFiles200Response createGitFiles()

✨ 创建仓库文件

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateGitFilesRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createGitFilesRequest: CreateGitFilesRequest; // (optional)

const { status, data } = await apiInstance.createGitFiles(
    createGitFilesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createGitFilesRequest** | **CreateGitFilesRequest**|  | |


### Return type

**CreateGitFiles200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createGitMergeReq**
> CreateGitMergeReq200Response createGitMergeReq()

✨ 创建git合并请求

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateGitMergeReqRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createGitMergeReqRequest: CreateGitMergeReqRequest; // (optional)

const { status, data } = await apiInstance.createGitMergeReq(
    createGitMergeReqRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createGitMergeReqRequest** | **CreateGitMergeReqRequest**|  | |


### Return type

**CreateGitMergeReq200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createGitMergeRequest**
> CreateGitMergeRequest200Response createGitMergeRequest()

✨ 创建 Git 合并请求mr

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateGitMergeRequestRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createGitMergeRequestRequest: CreateGitMergeRequestRequest; // (optional)

const { status, data } = await apiInstance.createGitMergeRequest(
    createGitMergeRequestRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createGitMergeRequestRequest** | **CreateGitMergeRequestRequest**|  | |


### Return type

**CreateGitMergeRequest200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createGitProtectedTagRule**
> DeleteCdHostServerGroup200Response createGitProtectedTagRule()

✨ 创建标签保护规则

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateGitProtectedTagRuleRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createGitProtectedTagRuleRequest: CreateGitProtectedTagRuleRequest; // (optional)

const { status, data } = await apiInstance.createGitProtectedTagRule(
    createGitProtectedTagRuleRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createGitProtectedTagRuleRequest** | **CreateGitProtectedTagRuleRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createGitProtectedTagRules**
> DeleteCdHostServerGroup200Response createGitProtectedTagRules()

✨ 批量创建标签保护规则

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateGitProtectedTagRulesRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createGitProtectedTagRulesRequest: CreateGitProtectedTagRulesRequest; // (optional)

const { status, data } = await apiInstance.createGitProtectedTagRules(
    createGitProtectedTagRulesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createGitProtectedTagRulesRequest** | **CreateGitProtectedTagRulesRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createGitRelease**
> DeleteCdHostServerGroup200Response createGitRelease()

✨ 新建 git 版本

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateGitReleaseRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createGitReleaseRequest: CreateGitReleaseRequest; // (optional)

const { status, data } = await apiInstance.createGitRelease(
    createGitReleaseRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createGitReleaseRequest** | **CreateGitReleaseRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createGitTag**
> CreateGitTag200Response createGitTag()

✨ 创建标签

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateGitTagRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createGitTagRequest: CreateGitTagRequest; // (optional)

const { status, data } = await apiInstance.createGitTag(
    createGitTagRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createGitTagRequest** | **CreateGitTagRequest**|  | |


### Return type

**CreateGitTag200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createIssue**
> CreateIssue200Response createIssue()

✨ 创建事项

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateIssueRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createIssueRequest: CreateIssueRequest; // (optional)

const { status, data } = await apiInstance.createIssue(
    createIssueRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createIssueRequest** | **CreateIssueRequest**|  | |


### Return type

**CreateIssue200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createIssueBlock**
> DeleteCdHostServerGroup200Response createIssueBlock()

✨ 添加前置事项

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateIssueBlockRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createIssueBlockRequest: CreateIssueBlockRequest; // (optional)

const { status, data } = await apiInstance.createIssueBlock(
    createIssueBlockRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createIssueBlockRequest** | **CreateIssueBlockRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createIssueComment**
> DeleteCdHostServerGroup200Response createIssueComment()

✨ 创建事项评论

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateIssueCommentRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createIssueCommentRequest: CreateIssueCommentRequest; // (optional)

const { status, data } = await apiInstance.createIssueComment(
    createIssueCommentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createIssueCommentRequest** | **CreateIssueCommentRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createIssueModule**
> CreateIssueModule200Response createIssueModule()

✨ 创建事项模块

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateIssueModuleRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createIssueModuleRequest: CreateIssueModuleRequest; // (optional)

const { status, data } = await apiInstance.createIssueModule(
    createIssueModuleRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createIssueModuleRequest** | **CreateIssueModuleRequest**|  | |


### Return type

**CreateIssueModule200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createIssueWorkHours**
> DeleteCdHostServerGroup200Response createIssueWorkHours()

✨ 登记工时

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateIssueWorkHoursRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createIssueWorkHoursRequest: CreateIssueWorkHoursRequest; // (optional)

const { status, data } = await apiInstance.createIssueWorkHours(
    createIssueWorkHoursRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createIssueWorkHoursRequest** | **CreateIssueWorkHoursRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createIteration**
> CreateIteration200Response createIteration()

✨ 创建迭代

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateIterationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createIterationRequest: CreateIterationRequest; // (optional)

const { status, data } = await apiInstance.createIteration(
    createIterationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createIterationRequest** | **CreateIterationRequest**|  | |


### Return type

**CreateIteration200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createMemberSshKey**
> CreateMemberSshKey200Response createMemberSshKey()

✨ 导入团队成员SSH公钥

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateMemberSshKeyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createMemberSshKeyRequest: CreateMemberSshKeyRequest; // (optional)

const { status, data } = await apiInstance.createMemberSshKey(
    createMemberSshKeyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createMemberSshKeyRequest** | **CreateMemberSshKeyRequest**|  | |


### Return type

**CreateMemberSshKey200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createMergeRequestNote**
> CreateMergeRequestNote200Response createMergeRequestNote()

✨ 创建合并请求行评论和改动文件diff行评论

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateMergeRequestNoteRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createMergeRequestNoteRequest: CreateMergeRequestNoteRequest; // (optional)

const { status, data } = await apiInstance.createMergeRequestNote(
    createMergeRequestNoteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createMergeRequestNoteRequest** | **CreateMergeRequestNoteRequest**|  | |


### Return type

**CreateMergeRequestNote200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createMergeRequestReviewer**
> CreateMergeRequestReviewer200Response createMergeRequestReviewer()

✨ 新增合并请求评审者

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateMergeRequestReviewerRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createMergeRequestReviewerRequest: CreateMergeRequestReviewerRequest; // (optional)

const { status, data } = await apiInstance.createMergeRequestReviewer(
    createMergeRequestReviewerRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createMergeRequestReviewerRequest** | **CreateMergeRequestReviewerRequest**|  | |


### Return type

**CreateMergeRequestReviewer200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createPolicy**
> ModifyPolicy200Response createPolicy()

✨ 权限组创建

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreatePolicyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createPolicyRequest: CreatePolicyRequest; // (optional)

const { status, data } = await apiInstance.createPolicy(
    createPolicyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createPolicyRequest** | **CreatePolicyRequest**|  | |


### Return type

**ModifyPolicy200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createProgram**
> CreateProgram200Response createProgram()

✨ 项目集创建

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateProgramRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createProgramRequest: CreateProgramRequest; // (optional)

const { status, data } = await apiInstance.createProgram(
    createProgramRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createProgramRequest** | **CreateProgramRequest**|  | |


### Return type

**CreateProgram200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 正常返回 |  -  |
|**401** | Invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createProgramMemberPolicy**
> CreateProgramMemberPolicy200Response createProgramMemberPolicy()

✨ 项目集成员权限组添加

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateProgramMemberPolicyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createProgramMemberPolicyRequest: CreateProgramMemberPolicyRequest; // (optional)

const { status, data } = await apiInstance.createProgramMemberPolicy(
    createProgramMemberPolicyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createProgramMemberPolicyRequest** | **CreateProgramMemberPolicyRequest**|  | |


### Return type

**CreateProgramMemberPolicy200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 正常返回 |  -  |
|**401** | Invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createProgramProjects**
> CreateProgramProjects200Response createProgramProjects()

✨ 项目集中添加项目

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateProgramProjectsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createProgramProjectsRequest: CreateProgramProjectsRequest; // (optional)

const { status, data } = await apiInstance.createProgramProjects(
    createProgramProjectsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createProgramProjectsRequest** | **CreateProgramProjectsRequest**|  | |


### Return type

**CreateProgramProjects200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 正常返回 |  -  |
|**401** | Invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createProjectAnnouncement**
> CreateProjectAnnouncement200Response createProjectAnnouncement()

✨ 项目公告创建

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateProjectAnnouncementRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createProjectAnnouncementRequest: CreateProjectAnnouncementRequest; // (optional)

const { status, data } = await apiInstance.createProjectAnnouncement(
    createProjectAnnouncementRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createProjectAnnouncementRequest** | **CreateProjectAnnouncementRequest**|  | |


### Return type

**CreateProjectAnnouncement200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 正常返回 |  -  |
|**401** | Invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createProjectLabel**
> ModifyProjectLabel200Response createProjectLabel()

✨ 项目标签创建

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateProjectLabelRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createProjectLabelRequest: CreateProjectLabelRequest; // (optional)

const { status, data } = await apiInstance.createProjectLabel(
    createProjectLabelRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createProjectLabelRequest** | **CreateProjectLabelRequest**|  | |


### Return type

**ModifyProjectLabel200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 正常返回 |  -  |
|**401** | Invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createProjectMemberPrincipal**
> DeleteCdHostServerGroup200Response createProjectMemberPrincipal()

✨ 项目成员主体新增(包含用户组、部门、成员)

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateProjectMemberPrincipalRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createProjectMemberPrincipalRequest: CreateProjectMemberPrincipalRequest; // (optional)

const { status, data } = await apiInstance.createProjectMemberPrincipal(
    createProjectMemberPrincipalRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createProjectMemberPrincipalRequest** | **CreateProjectMemberPrincipalRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createProjectWithTemplate**
> CreateProjectWithTemplate200Response createProjectWithTemplate()

✨ 模版项目创建

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateProjectWithTemplateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createProjectWithTemplateRequest: CreateProjectWithTemplateRequest; // (optional)

const { status, data } = await apiInstance.createProjectWithTemplate(
    createProjectWithTemplateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createProjectWithTemplateRequest** | **CreateProjectWithTemplateRequest**|  | |


### Return type

**CreateProjectWithTemplate200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createReadOnlyRef**
> DeleteCdHostServerGroup200Response createReadOnlyRef()

✨ 创建只读分支

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateReadOnlyRefRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createReadOnlyRefRequest: CreateReadOnlyRefRequest; // (optional)

const { status, data } = await apiInstance.createReadOnlyRef(
    createReadOnlyRefRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createReadOnlyRefRequest** | **CreateReadOnlyRefRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createRelease**
> ModifyRelease200Response createRelease()

✨ 创建版本

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateReleaseRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createReleaseRequest: CreateReleaseRequest; // (optional)

const { status, data } = await apiInstance.createRelease(
    createReleaseRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createReleaseRequest** | **CreateReleaseRequest**|  | |


### Return type

**ModifyRelease200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createReport**
> CreateReport200Response createReport()

✨ 创建测试报告

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateReportRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createReportRequest: CreateReportRequest; // (optional)

const { status, data } = await apiInstance.createReport(
    createReportRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createReportRequest** | **CreateReportRequest**|  | |


### Return type

**CreateReport200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createRequirementDefectRelation**
> DeleteCdHostServerGroup200Response createRequirementDefectRelation()

✨ 需求关联缺陷

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateRequirementDefectRelationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createRequirementDefectRelationRequest: CreateRequirementDefectRelationRequest; // (optional)

const { status, data } = await apiInstance.createRequirementDefectRelation(
    createRequirementDefectRelationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createRequirementDefectRelationRequest** | **CreateRequirementDefectRelationRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createSshKey**
> CreateSshKey200Response createSshKey()

✨ 导入用户SSH公钥

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateSshKeyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createSshKeyRequest: CreateSshKeyRequest; // (optional)

const { status, data } = await apiInstance.createSshKey(
    createSshKeyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createSshKeyRequest** | **CreateSshKeyRequest**|  | |


### Return type

**CreateSshKey200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createTestCase**
> CreateTestCase200Response createTestCase()

✨ 测试用例创建

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateTestCaseRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createTestCaseRequest: CreateTestCaseRequest; // (optional)

const { status, data } = await apiInstance.createTestCase(
    createTestCaseRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createTestCaseRequest** | **CreateTestCaseRequest**|  | |


### Return type

**CreateTestCase200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createTestCaseSection**
> ModifyTestCaseSection200Response createTestCaseSection()

✨ 测试用例分组创建

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateTestCaseSectionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createTestCaseSectionRequest: CreateTestCaseSectionRequest; // (optional)

const { status, data } = await apiInstance.createTestCaseSection(
    createTestCaseSectionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createTestCaseSectionRequest** | **CreateTestCaseSectionRequest**|  | |


### Return type

**ModifyTestCaseSection200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createTestDefect**
> DeleteCdHostServerGroup200Response createTestDefect()

✨ 测试任务关联缺陷

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateTestDefectRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createTestDefectRequest: CreateTestDefectRequest; // (optional)

const { status, data } = await apiInstance.createTestDefect(
    createTestDefectRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createTestDefectRequest** | **CreateTestDefectRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createTestResult**
> DeleteCdHostServerGroup200Response createTestResult()

✨ 测试任务添加测试结果

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateTestResultRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createTestResultRequest: CreateTestResultRequest; // (optional)

const { status, data } = await apiInstance.createTestResult(
    createTestResultRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createTestResultRequest** | **CreateTestResultRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createTestResults**
> DeleteCdHostServerGroup200Response createTestResults()

✨ 测试任务状态批量更新

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateTestResultsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createTestResultsRequest: CreateTestResultsRequest; // (optional)

const { status, data } = await apiInstance.createTestResults(
    createTestResultsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createTestResultsRequest** | **CreateTestResultsRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createTestRun**
> ModifyTestRun200Response createTestRun()

✨ 测试计划创建

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateTestRunRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createTestRunRequest: CreateTestRunRequest; // (optional)

const { status, data } = await apiInstance.createTestRun(
    createTestRunRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createTestRunRequest** | **CreateTestRunRequest**|  | |


### Return type

**ModifyTestRun200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createTestStepResult**
> DeleteCdHostServerGroup200Response createTestStepResult()

✨ 测试任务添加某步骤的测试结果

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateTestStepResultRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createTestStepResultRequest: CreateTestStepResultRequest; // (optional)

const { status, data } = await apiInstance.createTestStepResult(
    createTestStepResultRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createTestStepResultRequest** | **CreateTestStepResultRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createUserGroup**
> CreateUserGroup200Response createUserGroup()

✨ 用户组创建

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateUserGroupRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createUserGroupRequest: CreateUserGroupRequest; // (optional)

const { status, data } = await apiInstance.createUserGroup(
    createUserGroupRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createUserGroupRequest** | **CreateUserGroupRequest**|  | |


### Return type

**CreateUserGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createUserGroupUsers**
> DeleteCdHostServerGroup200Response createUserGroupUsers()

✨ 用户组添加用户

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateUserGroupUsersRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createUserGroupUsersRequest: CreateUserGroupUsersRequest; // (optional)

const { status, data } = await apiInstance.createUserGroupUsers(
    createUserGroupUsersRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createUserGroupUsersRequest** | **CreateUserGroupUsersRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteAllUsersOnGroup**
> DeleteCdHostServerGroup200Response deleteAllUsersOnGroup()

✨ 用户组清理用户

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DeleteAllUsersOnGroupRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let deleteAllUsersOnGroupRequest: DeleteAllUsersOnGroupRequest; // (optional)

const { status, data } = await apiInstance.deleteAllUsersOnGroup(
    deleteAllUsersOnGroupRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteAllUsersOnGroupRequest** | **DeleteAllUsersOnGroupRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteArtifactProperties**
> DeleteCdHostServerGroup200Response deleteArtifactProperties()

✨ 删除指定版本制品的指定制品属性

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DeleteArtifactPropertiesRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let deleteArtifactPropertiesRequest: DeleteArtifactPropertiesRequest; // (optional)

const { status, data } = await apiInstance.deleteArtifactProperties(
    deleteArtifactPropertiesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteArtifactPropertiesRequest** | **DeleteArtifactPropertiesRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteBranchProtection**
> DeleteCdHostServerGroup200Response deleteBranchProtection()

✨ 删除保护分支规则

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DeleteBranchProtectionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let deleteBranchProtectionRequest: DeleteBranchProtectionRequest; // (optional)

const { status, data } = await apiInstance.deleteBranchProtection(
    deleteBranchProtectionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteBranchProtectionRequest** | **DeleteBranchProtectionRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteBranchProtectionMember**
> DeleteCdHostServerGroup200Response deleteBranchProtectionMember()

✨ 新增保护分支规则管理员

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DeleteBranchProtectionMemberRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let deleteBranchProtectionMemberRequest: DeleteBranchProtectionMemberRequest; // (optional)

const { status, data } = await apiInstance.deleteBranchProtectionMember(
    deleteBranchProtectionMemberRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteBranchProtectionMemberRequest** | **DeleteBranchProtectionMemberRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteCdCloudAccount**
> DeleteCdHostServerGroup200Response deleteCdCloudAccount()

✨ CD 云账号删除

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DeleteCdCloudAccountRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let deleteCdCloudAccountRequest: DeleteCdCloudAccountRequest; // (optional)

const { status, data } = await apiInstance.deleteCdCloudAccount(
    deleteCdCloudAccountRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteCdCloudAccountRequest** | **DeleteCdCloudAccountRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteCdHostServerGroup**
> DeleteCdHostServerGroup200Response deleteCdHostServerGroup()

✨ CD 主机组删除

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DeleteCdHostServerGroupRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let deleteCdHostServerGroupRequest: DeleteCdHostServerGroupRequest; // (optional)

const { status, data } = await apiInstance.deleteCdHostServerGroup(
    deleteCdHostServerGroupRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteCdHostServerGroupRequest** | **DeleteCdHostServerGroupRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteCdPipeline**
> DeleteCdHostServerGroup200Response deleteCdPipeline()

✨ CD 部署流程删除

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DeleteCdPipelineRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let deleteCdPipelineRequest: DeleteCdPipelineRequest; // (optional)

const { status, data } = await apiInstance.deleteCdPipeline(
    deleteCdPipelineRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteCdPipelineRequest** | **DeleteCdPipelineRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteCodingCIBuild**
> DeleteCdHostServerGroup200Response deleteCodingCIBuild()

✨ 删除构建

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeCodingCIBuildStageRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeCodingCIBuildStageRequest: DescribeCodingCIBuildStageRequest; // (optional)

const { status, data } = await apiInstance.deleteCodingCIBuild(
    describeCodingCIBuildStageRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeCodingCIBuildStageRequest** | **DescribeCodingCIBuildStageRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteCodingCIJob**
> DeleteCdHostServerGroup200Response deleteCodingCIJob()

✨ 删除构建计划

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DeleteCodingCIJobRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let deleteCodingCIJobRequest: DeleteCodingCIJobRequest; // (optional)

const { status, data } = await apiInstance.deleteCodingCIJob(
    deleteCodingCIJobRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteCodingCIJobRequest** | **DeleteCodingCIJobRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteDepartment**
> DeleteCdHostServerGroup200Response deleteDepartment()

✨ 部门删除

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DeleteDepartmentRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let deleteDepartmentRequest: DeleteDepartmentRequest; // (optional)

const { status, data } = await apiInstance.deleteDepartment(
    deleteDepartmentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteDepartmentRequest** | **DeleteDepartmentRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 正常返回 |  -  |
|**401** | Invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteDepotFilePushRule**
> DeleteDepotFilePushRule200Response deleteDepotFilePushRule()

✨ 删除 git 仓库文件推送规则

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DeleteDepotFilePushRuleRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let deleteDepotFilePushRuleRequest: DeleteDepotFilePushRuleRequest; // (optional)

const { status, data } = await apiInstance.deleteDepotFilePushRule(
    deleteDepotFilePushRuleRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteDepotFilePushRuleRequest** | **DeleteDepotFilePushRuleRequest**|  | |


### Return type

**DeleteDepotFilePushRule200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteDepotFilePushRuleDenyPrivilege**
> DeleteDepotFilePushRuleDenyPrivilege200Response deleteDepotFilePushRuleDenyPrivilege()

✨ 删除 git 仓库特权者文件推送权限

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DeleteDepotFilePushRuleDenyPrivilegeRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let deleteDepotFilePushRuleDenyPrivilegeRequest: DeleteDepotFilePushRuleDenyPrivilegeRequest; // (optional)

const { status, data } = await apiInstance.deleteDepotFilePushRuleDenyPrivilege(
    deleteDepotFilePushRuleDenyPrivilegeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteDepotFilePushRuleDenyPrivilegeRequest** | **DeleteDepotFilePushRuleDenyPrivilegeRequest**|  | |


### Return type

**DeleteDepotFilePushRuleDenyPrivilege200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteGitBranch**
> DeleteCdHostServerGroup200Response deleteGitBranch()

✨ 删除代码仓库分支

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DeleteGitBranchRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let deleteGitBranchRequest: DeleteGitBranchRequest; // (optional)

const { status, data } = await apiInstance.deleteGitBranch(
    deleteGitBranchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteGitBranchRequest** | **DeleteGitBranchRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteGitDeployKey**
> DeleteCdHostServerGroup200Response deleteGitDeployKey()

✨ 删除部署公钥

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DeleteGitDeployKeyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let deleteGitDeployKeyRequest: DeleteGitDeployKeyRequest; // (optional)

const { status, data } = await apiInstance.deleteGitDeployKey(
    deleteGitDeployKeyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteGitDeployKeyRequest** | **DeleteGitDeployKeyRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteGitDepot**
> DeleteCdHostServerGroup200Response deleteGitDepot()

✨ 删除git仓库

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DeleteGitDepotRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let deleteGitDepotRequest: DeleteGitDepotRequest; // (optional)

const { status, data } = await apiInstance.deleteGitDepot(
    deleteGitDepotRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteGitDepotRequest** | **DeleteGitDepotRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteGitFiles**
> DeleteGitFiles200Response deleteGitFiles()

✨ 删除文件并提交

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DeleteGitFilesRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let deleteGitFilesRequest: DeleteGitFilesRequest; // (optional)

const { status, data } = await apiInstance.deleteGitFiles(
    deleteGitFilesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteGitFilesRequest** | **DeleteGitFilesRequest**|  | |


### Return type

**DeleteGitFiles200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteGitMergedBranches**
> DeleteCdHostServerGroup200Response deleteGitMergedBranches()

✨ 删除已合并到默认分支的分支（此操作不会删除受保护的分支）

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DeleteGitMergedBranchesRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let deleteGitMergedBranchesRequest: DeleteGitMergedBranchesRequest; // (optional)

const { status, data } = await apiInstance.deleteGitMergedBranches(
    deleteGitMergedBranchesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteGitMergedBranchesRequest** | **DeleteGitMergedBranchesRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteGitProtectedTagRule**
> DeleteCdHostServerGroup200Response deleteGitProtectedTagRule()

✨ 删除标签保护规则

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DeleteGitProtectedTagRuleRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let deleteGitProtectedTagRuleRequest: DeleteGitProtectedTagRuleRequest; // (optional)

const { status, data } = await apiInstance.deleteGitProtectedTagRule(
    deleteGitProtectedTagRuleRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteGitProtectedTagRuleRequest** | **DeleteGitProtectedTagRuleRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteGitRelease**
> DeleteCdHostServerGroup200Response deleteGitRelease()

✨ 删除仓库版本

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DeleteGitReleaseRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let deleteGitReleaseRequest: DeleteGitReleaseRequest; // (optional)

const { status, data } = await apiInstance.deleteGitRelease(
    deleteGitReleaseRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteGitReleaseRequest** | **DeleteGitReleaseRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteGitTag**
> DeleteCdHostServerGroup200Response deleteGitTag()

✨ 代码仓库删除tag

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DeleteGitTagRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let deleteGitTagRequest: DeleteGitTagRequest; // (optional)

const { status, data } = await apiInstance.deleteGitTag(
    deleteGitTagRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteGitTagRequest** | **DeleteGitTagRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteIssue**
> DeleteCdHostServerGroup200Response deleteIssue()

✨ 删除事项

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DeleteIssueRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let deleteIssueRequest: DeleteIssueRequest; // (optional)

const { status, data } = await apiInstance.deleteIssue(
    deleteIssueRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteIssueRequest** | **DeleteIssueRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteIssueBlock**
> DeleteCdHostServerGroup200Response deleteIssueBlock()

✨ 删除前置事项

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DeleteIssueBlockRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let deleteIssueBlockRequest: DeleteIssueBlockRequest; // (optional)

const { status, data } = await apiInstance.deleteIssueBlock(
    deleteIssueBlockRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteIssueBlockRequest** | **DeleteIssueBlockRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteIssueModule**
> DeleteCdHostServerGroup200Response deleteIssueModule()

✨ 删除事项模块

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DeleteIssueModuleRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let deleteIssueModuleRequest: DeleteIssueModuleRequest; // (optional)

const { status, data } = await apiInstance.deleteIssueModule(
    deleteIssueModuleRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteIssueModuleRequest** | **DeleteIssueModuleRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteIssueWorkHours**
> DeleteCdHostServerGroup200Response deleteIssueWorkHours()

✨ 删除工时日志

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DeleteIssueWorkHoursRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let deleteIssueWorkHoursRequest: DeleteIssueWorkHoursRequest; // (optional)

const { status, data } = await apiInstance.deleteIssueWorkHours(
    deleteIssueWorkHoursRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteIssueWorkHoursRequest** | **DeleteIssueWorkHoursRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteIteration**
> DeleteCdHostServerGroup200Response deleteIteration()

✨ 删除迭代

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DeleteIterationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let deleteIterationRequest: DeleteIterationRequest; // (optional)

const { status, data } = await apiInstance.deleteIteration(
    deleteIterationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteIterationRequest** | **DeleteIterationRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteMemberSshKey**
> DeleteCdHostServerGroup200Response deleteMemberSshKey()

✨ 删除团队成员的SSH公钥

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DeleteMemberSshKeyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let deleteMemberSshKeyRequest: DeleteMemberSshKeyRequest; // (optional)

const { status, data } = await apiInstance.deleteMemberSshKey(
    deleteMemberSshKeyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteMemberSshKeyRequest** | **DeleteMemberSshKeyRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteMergeRequestNote**
> DeleteMergeRequestNote200Response deleteMergeRequestNote()

✨ 删除合并请求行评论和改动文件diff行评论

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DeleteMergeRequestNoteRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let deleteMergeRequestNoteRequest: DeleteMergeRequestNoteRequest; // (optional)

const { status, data } = await apiInstance.deleteMergeRequestNote(
    deleteMergeRequestNoteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteMergeRequestNoteRequest** | **DeleteMergeRequestNoteRequest**|  | |


### Return type

**DeleteMergeRequestNote200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteMergeRequestReviewer**
> DeleteMergeRequestReviewer200Response deleteMergeRequestReviewer()

✨ 删除mr评审者

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DeleteMergeRequestReviewerRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let deleteMergeRequestReviewerRequest: DeleteMergeRequestReviewerRequest; // (optional)

const { status, data } = await apiInstance.deleteMergeRequestReviewer(
    deleteMergeRequestReviewerRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteMergeRequestReviewerRequest** | **DeleteMergeRequestReviewerRequest**|  | |


### Return type

**DeleteMergeRequestReviewer200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteOneProject**
> DeleteCdHostServerGroup200Response deleteOneProject()

✨ 单个项目删除

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DeleteOneProjectRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let deleteOneProjectRequest: DeleteOneProjectRequest; // (optional)

const { status, data } = await apiInstance.deleteOneProject(
    deleteOneProjectRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteOneProjectRequest** | **DeleteOneProjectRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deletePoliciesById**
> DeletePoliciesById200Response deletePoliciesById()

✨ 权限组批量删除

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DeletePoliciesByIdRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let deletePoliciesByIdRequest: DeletePoliciesByIdRequest; // (optional)

const { status, data } = await apiInstance.deletePoliciesById(
    deletePoliciesByIdRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deletePoliciesByIdRequest** | **DeletePoliciesByIdRequest**|  | |


### Return type

**DeletePoliciesById200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteProgramMemberPolicy**
> DeleteProgramMemberPolicy200Response deleteProgramMemberPolicy()

✨ 项目集成员权限组删除

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DeleteProgramMemberPolicyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let deleteProgramMemberPolicyRequest: DeleteProgramMemberPolicyRequest; // (optional)

const { status, data } = await apiInstance.deleteProgramMemberPolicy(
    deleteProgramMemberPolicyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteProgramMemberPolicyRequest** | **DeleteProgramMemberPolicyRequest**|  | |


### Return type

**DeleteProgramMemberPolicy200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 正常返回 |  -  |
|**401** | Invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteProjectAnnouncement**
> DeleteCdHostServerGroup200Response deleteProjectAnnouncement()

✨ 项目公告删除

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DeleteProjectAnnouncementRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let deleteProjectAnnouncementRequest: DeleteProjectAnnouncementRequest; // (optional)

const { status, data } = await apiInstance.deleteProjectAnnouncement(
    deleteProjectAnnouncementRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteProjectAnnouncementRequest** | **DeleteProjectAnnouncementRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 正常返回 |  -  |
|**401** | Invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteProjectLabel**
> DeleteProjectLabel200Response deleteProjectLabel()

✨ 项目标签删除

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DeleteProjectLabelRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let deleteProjectLabelRequest: DeleteProjectLabelRequest; // (optional)

const { status, data } = await apiInstance.deleteProjectLabel(
    deleteProjectLabelRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteProjectLabelRequest** | **DeleteProjectLabelRequest**|  | |


### Return type

**DeleteProjectLabel200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 正常返回 |  -  |
|**401** | Invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteProjectMemberPrincipal**
> DeleteCdHostServerGroup200Response deleteProjectMemberPrincipal()

✨ 项目成员主体删除(包含用户组、部门、成员)

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DeleteProjectMemberPrincipalRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let deleteProjectMemberPrincipalRequest: DeleteProjectMemberPrincipalRequest; // (optional)

const { status, data } = await apiInstance.deleteProjectMemberPrincipal(
    deleteProjectMemberPrincipalRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteProjectMemberPrincipalRequest** | **DeleteProjectMemberPrincipalRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteRelease**
> DeleteCdHostServerGroup200Response deleteRelease()

✨ 删除版本

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DeleteReleaseRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let deleteReleaseRequest: DeleteReleaseRequest; // (optional)

const { status, data } = await apiInstance.deleteRelease(
    deleteReleaseRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteReleaseRequest** | **DeleteReleaseRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteReport**
> DeleteCdHostServerGroup200Response deleteReport()

✨ 测试报告删除

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DeleteReportRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let deleteReportRequest: DeleteReportRequest; // (optional)

const { status, data } = await apiInstance.deleteReport(
    deleteReportRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteReportRequest** | **DeleteReportRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteRequirementDefectRelation**
> DeleteCdHostServerGroup200Response deleteRequirementDefectRelation()

✨ 需求取消关联缺陷

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateRequirementDefectRelationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createRequirementDefectRelationRequest: CreateRequirementDefectRelationRequest; // (optional)

const { status, data } = await apiInstance.deleteRequirementDefectRelation(
    createRequirementDefectRelationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createRequirementDefectRelationRequest** | **CreateRequirementDefectRelationRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteSshKey**
> DeleteCdHostServerGroup200Response deleteSshKey()

✨ 删除当前用户的SSH公钥

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DeleteSshKeyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let deleteSshKeyRequest: DeleteSshKeyRequest; // (optional)

const { status, data } = await apiInstance.deleteSshKey(
    deleteSshKeyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteSshKeyRequest** | **DeleteSshKeyRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteTeamLevelDepotSpec**
> DeleteCdHostServerGroup200Response deleteTeamLevelDepotSpec()

✨ 删除团队级别的分支规范

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DeleteTeamLevelDepotSpecRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let deleteTeamLevelDepotSpecRequest: DeleteTeamLevelDepotSpecRequest; // (optional)

const { status, data } = await apiInstance.deleteTeamLevelDepotSpec(
    deleteTeamLevelDepotSpecRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteTeamLevelDepotSpecRequest** | **DeleteTeamLevelDepotSpecRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteTeamMember**
> DeleteCdHostServerGroup200Response deleteTeamMember()

✨ 团队成员删除

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DeleteTeamMemberRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let deleteTeamMemberRequest: DeleteTeamMemberRequest; // (optional)

const { status, data } = await apiInstance.deleteTeamMember(
    deleteTeamMemberRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteTeamMemberRequest** | **DeleteTeamMemberRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteTestCase**
> DeleteCdHostServerGroup200Response deleteTestCase()

✨ 测试用例删除

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DeleteTestCaseRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let deleteTestCaseRequest: DeleteTestCaseRequest; // (optional)

const { status, data } = await apiInstance.deleteTestCase(
    deleteTestCaseRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteTestCaseRequest** | **DeleteTestCaseRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteTestCaseSection**
> DeleteCdHostServerGroup200Response deleteTestCaseSection()

✨ 测试用例分组删除

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DeleteTestCaseSectionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let deleteTestCaseSectionRequest: DeleteTestCaseSectionRequest; // (optional)

const { status, data } = await apiInstance.deleteTestCaseSection(
    deleteTestCaseSectionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteTestCaseSectionRequest** | **DeleteTestCaseSectionRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteTestRun**
> DeleteCdHostServerGroup200Response deleteTestRun()

✨ 测试计划删除

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DeleteTestRunRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let deleteTestRunRequest: DeleteTestRunRequest; // (optional)

const { status, data } = await apiInstance.deleteTestRun(
    deleteTestRunRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteTestRunRequest** | **DeleteTestRunRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteUserGroupByIds**
> DeleteCdHostServerGroup200Response deleteUserGroupByIds()

✨ 用户组删除

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DeleteUserGroupByIdsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let deleteUserGroupByIdsRequest: DeleteUserGroupByIdsRequest; // (optional)

const { status, data } = await apiInstance.deleteUserGroupByIds(
    deleteUserGroupByIdsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteUserGroupByIdsRequest** | **DeleteUserGroupByIdsRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteUserGroupUsers**
> DeleteCdHostServerGroup200Response deleteUserGroupUsers()

✨ 用户组删除用户

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DeleteUserGroupUsersRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let deleteUserGroupUsersRequest: DeleteUserGroupUsersRequest; // (optional)

const { status, data } = await apiInstance.deleteUserGroupUsers(
    deleteUserGroupUsersRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteUserGroupUsersRequest** | **DeleteUserGroupUsersRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeAgentSecret**
> DescribeAgentSecret200Response describeAgentSecret()

✨ 在堡垒机上安装 CD 客户端必要的 Secret 凭据参数

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let body: object; // (optional)

const { status, data } = await apiInstance.describeAgentSecret(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |


### Return type

**DescribeAgentSecret200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeAllMergeRequestNotes**
> DescribeAllMergeRequestNotes200Response describeAllMergeRequestNotes()

✨ 获取所有合并请求行评论和改动文件diff行评论

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeAllMergeRequestNotesRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeAllMergeRequestNotesRequest: DescribeAllMergeRequestNotesRequest; // (optional)

const { status, data } = await apiInstance.describeAllMergeRequestNotes(
    describeAllMergeRequestNotesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeAllMergeRequestNotesRequest** | **DescribeAllMergeRequestNotesRequest**|  | |


### Return type

**DescribeAllMergeRequestNotes200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeAllProjectLabels**
> DescribeAllProjectLabels200Response describeAllProjectLabels()

✨ 项目标签查询

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeAllProjectLabelsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeAllProjectLabelsRequest: DescribeAllProjectLabelsRequest; // (optional)

const { status, data } = await apiInstance.describeAllProjectLabels(
    describeAllProjectLabelsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeAllProjectLabelsRequest** | **DescribeAllProjectLabelsRequest**|  | |


### Return type

**DescribeAllProjectLabels200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 正常返回 |  -  |
|**401** | Invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeAllProjectsIssueWorkLogList**
> DescribeAllProjectsIssueWorkLogList200Response describeAllProjectsIssueWorkLogList()

✨ 查询全部有权限的项目工时日志列表

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeAllProjectsIssueWorkLogListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeAllProjectsIssueWorkLogListRequest: DescribeAllProjectsIssueWorkLogListRequest; // (optional)

const { status, data } = await apiInstance.describeAllProjectsIssueWorkLogList(
    describeAllProjectsIssueWorkLogListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeAllProjectsIssueWorkLogListRequest** | **DescribeAllProjectsIssueWorkLogListRequest**|  | |


### Return type

**DescribeAllProjectsIssueWorkLogList200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeArtifactChecksums**
> DescribeArtifactChecksums200Response describeArtifactChecksums()

✨ 制品Checksum列表查询

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeArtifactChecksumsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeArtifactChecksumsRequest: DescribeArtifactChecksumsRequest; // (optional)

const { status, data } = await apiInstance.describeArtifactChecksums(
    describeArtifactChecksumsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeArtifactChecksumsRequest** | **DescribeArtifactChecksumsRequest**|  | |


### Return type

**DescribeArtifactChecksums200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeArtifactCredit**
> DescribeArtifactCredit200Response describeArtifactCredit()

✨ 通过授信清单ID查询制品授信清单详情

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeArtifactCreditRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeArtifactCreditRequest: DescribeArtifactCreditRequest; // (optional)

const { status, data } = await apiInstance.describeArtifactCredit(
    describeArtifactCreditRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeArtifactCreditRequest** | **DescribeArtifactCreditRequest**|  | |


### Return type

**DescribeArtifactCredit200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 正常返回 |  -  |
|**401** | Invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeArtifactCreditList**
> DescribeArtifactCreditList200Response describeArtifactCreditList()

✨ 制品授信清单列表查询

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let body: object; // (optional)

const { status, data } = await apiInstance.describeArtifactCreditList(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |


### Return type

**DescribeArtifactCreditList200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 正常返回 |  -  |
|**401** | Invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeArtifactFileDownloadUrl**
> DescribeArtifactFileDownloadUrl200Response describeArtifactFileDownloadUrl()

✨ 制品文件临时下载链接获取

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeArtifactFileDownloadUrlRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeArtifactFileDownloadUrlRequest: DescribeArtifactFileDownloadUrlRequest; // (optional)

const { status, data } = await apiInstance.describeArtifactFileDownloadUrl(
    describeArtifactFileDownloadUrlRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeArtifactFileDownloadUrlRequest** | **DescribeArtifactFileDownloadUrlRequest**|  | |


### Return type

**DescribeArtifactFileDownloadUrl200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeArtifactPackageList**
> DescribeArtifactPackageList200Response describeArtifactPackageList()

✨ 制品包（镜像）列表查询

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeArtifactPackageListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeArtifactPackageListRequest: DescribeArtifactPackageListRequest; // (optional)

const { status, data } = await apiInstance.describeArtifactPackageList(
    describeArtifactPackageListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeArtifactPackageListRequest** | **DescribeArtifactPackageListRequest**|  | |


### Return type

**DescribeArtifactPackageList200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeArtifactProperties**
> DescribeArtifactProperties200Response describeArtifactProperties()

✨ 指定制品版本的制品属性列表查询

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeArtifactChecksumsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeArtifactChecksumsRequest: DescribeArtifactChecksumsRequest; // (optional)

const { status, data } = await apiInstance.describeArtifactProperties(
    describeArtifactChecksumsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeArtifactChecksumsRequest** | **DescribeArtifactChecksumsRequest**|  | |


### Return type

**DescribeArtifactProperties200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeArtifactRepositoryFileList**
> DescribeArtifactRepositoryFileList200Response describeArtifactRepositoryFileList()

✨ 制品仓库下可下载的文件列表获取

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeArtifactRepositoryFileListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeArtifactRepositoryFileListRequest: DescribeArtifactRepositoryFileListRequest; // (optional)

const { status, data } = await apiInstance.describeArtifactRepositoryFileList(
    describeArtifactRepositoryFileListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeArtifactRepositoryFileListRequest** | **DescribeArtifactRepositoryFileListRequest**|  | |


### Return type

**DescribeArtifactRepositoryFileList200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeArtifactRepositoryList**
> DescribeArtifactRepositoryList200Response describeArtifactRepositoryList()

✨ 查询当前团队指定项目的制品仓库列表

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeArtifactRepositoryListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeArtifactRepositoryListRequest: DescribeArtifactRepositoryListRequest; // (optional)

const { status, data } = await apiInstance.describeArtifactRepositoryList(
    describeArtifactRepositoryListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeArtifactRepositoryListRequest** | **DescribeArtifactRepositoryListRequest**|  | |


### Return type

**DescribeArtifactRepositoryList200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeArtifactVersionFileList**
> DescribeArtifactVersionFileList200Response describeArtifactVersionFileList()

✨ 制品版本可下载的文件列表获取（暂仅支持类型为: 1-Generic;3-maven;4-npm;5-pypi 制品）

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeArtifactVersionFileListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeArtifactVersionFileListRequest: DescribeArtifactVersionFileListRequest; // (optional)

const { status, data } = await apiInstance.describeArtifactVersionFileList(
    describeArtifactVersionFileListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeArtifactVersionFileListRequest** | **DescribeArtifactVersionFileListRequest**|  | |


### Return type

**DescribeArtifactVersionFileList200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeArtifactVersionList**
> DescribeArtifactVersionList200Response describeArtifactVersionList()

✨ 制品版本列表查询

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeArtifactVersionListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeArtifactVersionListRequest: DescribeArtifactVersionListRequest; // (optional)

const { status, data } = await apiInstance.describeArtifactVersionList(
    describeArtifactVersionListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeArtifactVersionListRequest** | **DescribeArtifactVersionListRequest**|  | |


### Return type

**DescribeArtifactVersionList200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeAvailablePoliciesOnResource**
> DescribeAvailablePoliciesOnResource200Response describeAvailablePoliciesOnResource()

✨ 权限组列表查询（指定资源）

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeAvailablePoliciesOnResourceRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeAvailablePoliciesOnResourceRequest: DescribeAvailablePoliciesOnResourceRequest; // (optional)

const { status, data } = await apiInstance.describeAvailablePoliciesOnResource(
    describeAvailablePoliciesOnResourceRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeAvailablePoliciesOnResourceRequest** | **DescribeAvailablePoliciesOnResourceRequest**|  | |


### Return type

**DescribeAvailablePoliciesOnResource200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeBlockIssueList**
> DescribeBlockIssueList200Response describeBlockIssueList()

✨ 查询后置事项

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeBlockIssueListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeBlockIssueListRequest: DescribeBlockIssueListRequest; // (optional)

const { status, data } = await apiInstance.describeBlockIssueList(
    describeBlockIssueListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeBlockIssueListRequest** | **DescribeBlockIssueListRequest**|  | |


### Return type

**DescribeBlockIssueList200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeBlockedByIssueList**
> DescribeBlockedByIssueList200Response describeBlockedByIssueList()

✨ 查询前置事项

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeBlockedByIssueListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeBlockedByIssueListRequest: DescribeBlockedByIssueListRequest; // (optional)

const { status, data } = await apiInstance.describeBlockedByIssueList(
    describeBlockedByIssueListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeBlockedByIssueListRequest** | **DescribeBlockedByIssueListRequest**|  | |


### Return type

**DescribeBlockedByIssueList200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeBranchProtection**
> DescribeBranchProtection200Response describeBranchProtection()

✨ 查询单个保护分支规则

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeBranchProtectionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeBranchProtectionRequest: DescribeBranchProtectionRequest; // (optional)

const { status, data } = await apiInstance.describeBranchProtection(
    describeBranchProtectionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeBranchProtectionRequest** | **DescribeBranchProtectionRequest**|  | |


### Return type

**DescribeBranchProtection200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeBranchProtectionMembers**
> DescribeBranchProtectionMembers200Response describeBranchProtectionMembers()

✨ 查询保护分支规则下所有管理员信息

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeBranchProtectionMembersRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeBranchProtectionMembersRequest: DescribeBranchProtectionMembersRequest; // (optional)

const { status, data } = await apiInstance.describeBranchProtectionMembers(
    describeBranchProtectionMembersRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeBranchProtectionMembersRequest** | **DescribeBranchProtectionMembersRequest**|  | |


### Return type

**DescribeBranchProtectionMembers200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeBranchProtections**
> DescribeBranchProtections200Response describeBranchProtections()

✨ 查询仓库保护分支规则集合

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeBranchProtectionsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeBranchProtectionsRequest: DescribeBranchProtectionsRequest; // (optional)

const { status, data } = await apiInstance.describeBranchProtections(
    describeBranchProtectionsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeBranchProtectionsRequest** | **DescribeBranchProtectionsRequest**|  | |


### Return type

**DescribeBranchProtections200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeCanMerge**
> DescribeCanMerge200Response describeCanMerge()

✨ 查看两个分支是否可以合并

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeCanMergeRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeCanMergeRequest: DescribeCanMergeRequest; // (optional)

const { status, data } = await apiInstance.describeCanMerge(
    describeCanMergeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeCanMergeRequest** | **DescribeCanMergeRequest**|  | |


### Return type

**DescribeCanMerge200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeCdAgentMachines**
> DescribeCdAgentMachines200Response describeCdAgentMachines()

✨ CD 堡垒机列表获取

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeCdAgentMachinesRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeCdAgentMachinesRequest: DescribeCdAgentMachinesRequest; // (optional)

const { status, data } = await apiInstance.describeCdAgentMachines(
    describeCdAgentMachinesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeCdAgentMachinesRequest** | **DescribeCdAgentMachinesRequest**|  | |


### Return type

**DescribeCdAgentMachines200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeCdApplication**
> DescribeCdApplication200Response describeCdApplication()

✨ CD 应用详情获取

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeCdApplicationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeCdApplicationRequest: DescribeCdApplicationRequest; // (optional)

const { status, data } = await apiInstance.describeCdApplication(
    describeCdApplicationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeCdApplicationRequest** | **DescribeCdApplicationRequest**|  | |


### Return type

**DescribeCdApplication200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeCdApplications**
> DescribeCdApplications200Response describeCdApplications()

✨ CD 应用列表获取

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let body: object; // (optional)

const { status, data } = await apiInstance.describeCdApplications(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |


### Return type

**DescribeCdApplications200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeCdApplicationsByProject**
> DescribeCdApplicationsByProject200Response describeCdApplicationsByProject()

✨ 根据项目名获取关联应用列表

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeWikiListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeWikiListRequest: DescribeWikiListRequest; // (optional)

const { status, data } = await apiInstance.describeCdApplicationsByProject(
    describeWikiListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeWikiListRequest** | **DescribeWikiListRequest**|  | |


### Return type

**DescribeCdApplicationsByProject200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeCdCloudAccounts**
> DescribeCdCloudAccounts200Response describeCdCloudAccounts()

✨ CD 云账号列表获取

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeCdCloudAccountsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeCdCloudAccountsRequest: DescribeCdCloudAccountsRequest; // (optional)

const { status, data } = await apiInstance.describeCdCloudAccounts(
    describeCdCloudAccountsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeCdCloudAccountsRequest** | **DescribeCdCloudAccountsRequest**|  | |


### Return type

**DescribeCdCloudAccounts200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeCdDeployCountByApplications**
> DescribeCdDeployCountByApplications200Response describeCdDeployCountByApplications()

✨ 根据应用名列表获取发布次数

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeCdDeployCountByApplicationsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeCdDeployCountByApplicationsRequest: DescribeCdDeployCountByApplicationsRequest; // (optional)

const { status, data } = await apiInstance.describeCdDeployCountByApplications(
    describeCdDeployCountByApplicationsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeCdDeployCountByApplicationsRequest** | **DescribeCdDeployCountByApplicationsRequest**|  | |


### Return type

**DescribeCdDeployCountByApplications200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeCdDeployCountByProject**
> DescribeCdDeployCountByProject200Response describeCdDeployCountByProject()

✨ 关联应用的发布次数获取（指定项目名）

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeCdDeployTimeByProjectRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeCdDeployTimeByProjectRequest: DescribeCdDeployTimeByProjectRequest; // (optional)

const { status, data } = await apiInstance.describeCdDeployCountByProject(
    describeCdDeployTimeByProjectRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeCdDeployTimeByProjectRequest** | **DescribeCdDeployTimeByProjectRequest**|  | |


### Return type

**DescribeCdDeployCountByProject200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeCdDeployTimeByApplications**
> DescribeCdDeployTimeByApplications200Response describeCdDeployTimeByApplications()

✨ 发布时长-根据应用名列表获取

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeCdDeployTimeByApplicationsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeCdDeployTimeByApplicationsRequest: DescribeCdDeployTimeByApplicationsRequest; // (optional)

const { status, data } = await apiInstance.describeCdDeployTimeByApplications(
    describeCdDeployTimeByApplicationsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeCdDeployTimeByApplicationsRequest** | **DescribeCdDeployTimeByApplicationsRequest**|  | |


### Return type

**DescribeCdDeployTimeByApplications200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeCdDeployTimeByProject**
> DescribeCdDeployTimeByProject200Response describeCdDeployTimeByProject()

✨ 关联应用的发布时长-根据项目名获取

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeCdDeployTimeByProjectRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeCdDeployTimeByProjectRequest: DescribeCdDeployTimeByProjectRequest; // (optional)

const { status, data } = await apiInstance.describeCdDeployTimeByProject(
    describeCdDeployTimeByProjectRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeCdDeployTimeByProjectRequest** | **DescribeCdDeployTimeByProjectRequest**|  | |


### Return type

**DescribeCdDeployTimeByProject200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeCdDeployTrendByApplications**
> DescribeCdDeployTrendByApplications200Response describeCdDeployTrendByApplications()

✨ 发布趋势-根据应用名列表获取

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeCdDeployTrendByApplicationsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeCdDeployTrendByApplicationsRequest: DescribeCdDeployTrendByApplicationsRequest; // (optional)

const { status, data } = await apiInstance.describeCdDeployTrendByApplications(
    describeCdDeployTrendByApplicationsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeCdDeployTrendByApplicationsRequest** | **DescribeCdDeployTrendByApplicationsRequest**|  | |


### Return type

**DescribeCdDeployTrendByApplications200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeCdDeployTrendByProject**
> DescribeCdDeployTrendByProject200Response describeCdDeployTrendByProject()

✨ 关联应用的发布趋势-根据项目名获取

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeCdDeployTrendByProjectRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeCdDeployTrendByProjectRequest: DescribeCdDeployTrendByProjectRequest; // (optional)

const { status, data } = await apiInstance.describeCdDeployTrendByProject(
    describeCdDeployTrendByProjectRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeCdDeployTrendByProjectRequest** | **DescribeCdDeployTrendByProjectRequest**|  | |


### Return type

**DescribeCdDeployTrendByProject200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeCdHostServerGroup**
> DescribeCdHostServerGroup200Response describeCdHostServerGroup()

✨ CD 主机组获取

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeCdHostServerGroupRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeCdHostServerGroupRequest: DescribeCdHostServerGroupRequest; // (optional)

const { status, data } = await apiInstance.describeCdHostServerGroup(
    describeCdHostServerGroupRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeCdHostServerGroupRequest** | **DescribeCdHostServerGroupRequest**|  | |


### Return type

**DescribeCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeCdHostServerGroups**
> DescribeCdHostServerGroups200Response describeCdHostServerGroups()

✨ CD 主机组列表获取

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeCdHostServerGroupsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeCdHostServerGroupsRequest: DescribeCdHostServerGroupsRequest; // (optional)

const { status, data } = await apiInstance.describeCdHostServerGroups(
    describeCdHostServerGroupsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeCdHostServerGroupsRequest** | **DescribeCdHostServerGroupsRequest**|  | |


### Return type

**DescribeCdHostServerGroups200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeCdPipeline**
> DescribeCdPipeline200Response describeCdPipeline()

✨ CD 部署流程执行记录获取

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeCdPipelineRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeCdPipelineRequest: DescribeCdPipelineRequest; // (optional)

const { status, data } = await apiInstance.describeCdPipeline(
    describeCdPipelineRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeCdPipelineRequest** | **DescribeCdPipelineRequest**|  | |


### Return type

**DescribeCdPipeline200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeCdPipelineConfig**
> DescribeCdPipelineConfig200Response describeCdPipelineConfig()

✨ CD 部署流程配置-根据名称获取

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeCdPipelineConfigRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeCdPipelineConfigRequest: DescribeCdPipelineConfigRequest; // (optional)

const { status, data } = await apiInstance.describeCdPipelineConfig(
    describeCdPipelineConfigRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeCdPipelineConfigRequest** | **DescribeCdPipelineConfigRequest**|  | |


### Return type

**DescribeCdPipelineConfig200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeCdPipelineConfigs**
> DescribeCdPipelineConfigs200Response describeCdPipelineConfigs()

✨ CD 应用下的所有部署流程配置获取

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeCdPipelineConfigsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeCdPipelineConfigsRequest: DescribeCdPipelineConfigsRequest; // (optional)

const { status, data } = await apiInstance.describeCdPipelineConfigs(
    describeCdPipelineConfigsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeCdPipelineConfigsRequest** | **DescribeCdPipelineConfigsRequest**|  | |


### Return type

**DescribeCdPipelineConfigs200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeCdTask**
> DescribeCdTask200Response describeCdTask()

✨ CD 任务执行记录获取

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeCdTaskRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeCdTaskRequest: DescribeCdTaskRequest; // (optional)

const { status, data } = await apiInstance.describeCdTask(
    describeCdTaskRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeCdTaskRequest** | **DescribeCdTaskRequest**|  | |


### Return type

**DescribeCdTask200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeCodeSearch**
> DescribeCodeSearch200Response describeCodeSearch()

✨ 查询代码片段详细列表

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeCodeSearchRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeCodeSearchRequest: DescribeCodeSearchRequest; // (optional)

const { status, data } = await apiInstance.describeCodeSearch(
    describeCodeSearchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeCodeSearchRequest** | **DescribeCodeSearchRequest**|  | |


### Return type

**DescribeCodeSearch200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeCodingCIBuild**
> DescribeCodingCIBuild200Response describeCodingCIBuild()

✨ 查询构建记录详情

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeCodingCIBuildStageRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeCodingCIBuildStageRequest: DescribeCodingCIBuildStageRequest; // (optional)

const { status, data } = await apiInstance.describeCodingCIBuild(
    describeCodingCIBuildStageRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeCodingCIBuildStageRequest** | **DescribeCodingCIBuildStageRequest**|  | |


### Return type

**DescribeCodingCIBuild200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeCodingCIBuildArtifacts**
> DescribeCodingCIBuildArtifacts200Response describeCodingCIBuildArtifacts()

✨ 查询构建任务制品

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeCodingCIBuildArtifactsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeCodingCIBuildArtifactsRequest: DescribeCodingCIBuildArtifactsRequest; // (optional)

const { status, data } = await apiInstance.describeCodingCIBuildArtifacts(
    describeCodingCIBuildArtifactsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeCodingCIBuildArtifactsRequest** | **DescribeCodingCIBuildArtifactsRequest**|  | |


### Return type

**DescribeCodingCIBuildArtifacts200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 正常返回 |  -  |
|**401** | Invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeCodingCIBuildEnvs**
> DescribeCodingCIBuildEnvs200Response describeCodingCIBuildEnvs()

✨ 获取构建计划环境变量

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeCodingCIBuildEnvsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeCodingCIBuildEnvsRequest: DescribeCodingCIBuildEnvsRequest; // (optional)

const { status, data } = await apiInstance.describeCodingCIBuildEnvs(
    describeCodingCIBuildEnvsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeCodingCIBuildEnvsRequest** | **DescribeCodingCIBuildEnvsRequest**|  | |


### Return type

**DescribeCodingCIBuildEnvs200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeCodingCIBuildHtmlReports**
> DescribeCodingCIBuildHtmlReports200Response describeCodingCIBuildHtmlReports()

✨ 构建任务网页报告查询

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeCodingCIBuildArtifactsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeCodingCIBuildArtifactsRequest: DescribeCodingCIBuildArtifactsRequest; // (optional)

const { status, data } = await apiInstance.describeCodingCIBuildHtmlReports(
    describeCodingCIBuildArtifactsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeCodingCIBuildArtifactsRequest** | **DescribeCodingCIBuildArtifactsRequest**|  | |


### Return type

**DescribeCodingCIBuildHtmlReports200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 正常返回 |  -  |
|**401** | Invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeCodingCIBuildLog**
> DescribeCodingCIBuildLog200Response describeCodingCIBuildLog()

✨ 构建日志获取

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeCodingCIBuildLogRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeCodingCIBuildLogRequest: DescribeCodingCIBuildLogRequest; // (optional)

const { status, data } = await apiInstance.describeCodingCIBuildLog(
    describeCodingCIBuildLogRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeCodingCIBuildLogRequest** | **DescribeCodingCIBuildLogRequest**|  | |


### Return type

**DescribeCodingCIBuildLog200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeCodingCIBuildLogRaw**
> DescribeCodingCIBuildLogRaw200Response describeCodingCIBuildLogRaw()

✨ 构建完整日志查询（原始日志 Raw）

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeCodingCIBuildLogRawRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeCodingCIBuildLogRawRequest: DescribeCodingCIBuildLogRawRequest; // (optional)

const { status, data } = await apiInstance.describeCodingCIBuildLogRaw(
    describeCodingCIBuildLogRawRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeCodingCIBuildLogRawRequest** | **DescribeCodingCIBuildLogRawRequest**|  | |


### Return type

**DescribeCodingCIBuildLogRaw200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeCodingCIBuildMetrics**
> DescribeCodingCIBuildMetrics200Response describeCodingCIBuildMetrics()

✨ 构建计划度量查询

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeCodingCIBuildMetricsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeCodingCIBuildMetricsRequest: DescribeCodingCIBuildMetricsRequest; // (optional)

const { status, data } = await apiInstance.describeCodingCIBuildMetrics(
    describeCodingCIBuildMetricsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeCodingCIBuildMetricsRequest** | **DescribeCodingCIBuildMetricsRequest**|  | |


### Return type

**DescribeCodingCIBuildMetrics200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeCodingCIBuildStage**
> DescribeCodingCIBuildStage200Response describeCodingCIBuildStage()

✨ 构建任务阶段获取

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeCodingCIBuildStageRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeCodingCIBuildStageRequest: DescribeCodingCIBuildStageRequest; // (optional)

const { status, data } = await apiInstance.describeCodingCIBuildStage(
    describeCodingCIBuildStageRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeCodingCIBuildStageRequest** | **DescribeCodingCIBuildStageRequest**|  | |


### Return type

**DescribeCodingCIBuildStage200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeCodingCIBuildStatistics**
> DescribeCodingCIBuildStatistics200Response describeCodingCIBuildStatistics()

✨ 构建任务统计

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeCodingCIBuildStatisticsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeCodingCIBuildStatisticsRequest: DescribeCodingCIBuildStatisticsRequest; // (optional)

const { status, data } = await apiInstance.describeCodingCIBuildStatistics(
    describeCodingCIBuildStatisticsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeCodingCIBuildStatisticsRequest** | **DescribeCodingCIBuildStatisticsRequest**|  | |


### Return type

**DescribeCodingCIBuildStatistics200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeCodingCIBuildStep**
> DescribeCodingCIBuildStep200Response describeCodingCIBuildStep()

✨ 构建任务指定阶段的步骤获取

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeCodingCIBuildStepRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeCodingCIBuildStepRequest: DescribeCodingCIBuildStepRequest; // (optional)

const { status, data } = await apiInstance.describeCodingCIBuildStep(
    describeCodingCIBuildStepRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeCodingCIBuildStepRequest** | **DescribeCodingCIBuildStepRequest**|  | |


### Return type

**DescribeCodingCIBuildStep200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeCodingCIBuildStepLog**
> DescribeCodingCIBuildStepLog200Response describeCodingCIBuildStepLog()

✨ 构建步骤日志获取

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeCodingCIBuildStepLogRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeCodingCIBuildStepLogRequest: DescribeCodingCIBuildStepLogRequest; // (optional)

const { status, data } = await apiInstance.describeCodingCIBuildStepLog(
    describeCodingCIBuildStepLogRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeCodingCIBuildStepLogRequest** | **DescribeCodingCIBuildStepLogRequest**|  | |


### Return type

**DescribeCodingCIBuildStepLog200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeCodingCIBuilds**
> DescribeCodingCIBuilds200Response describeCodingCIBuilds()

✨ 构建计划的构建列表获取

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeCodingCIBuildsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeCodingCIBuildsRequest: DescribeCodingCIBuildsRequest; // (optional)

const { status, data } = await apiInstance.describeCodingCIBuilds(
    describeCodingCIBuildsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeCodingCIBuildsRequest** | **DescribeCodingCIBuildsRequest**|  | |


### Return type

**DescribeCodingCIBuilds200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeCodingCIJob**
> DescribeCodingCIJob200Response describeCodingCIJob()

✨ 构建计划详情获取

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DeleteCodingCIJobRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let deleteCodingCIJobRequest: DeleteCodingCIJobRequest; // (optional)

const { status, data } = await apiInstance.describeCodingCIJob(
    deleteCodingCIJobRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteCodingCIJobRequest** | **DeleteCodingCIJobRequest**|  | |


### Return type

**DescribeCodingCIJob200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeCodingCIJobs**
> DescribeCodingCIJobs200Response describeCodingCIJobs()

✨ 构建计划查询（通过项目ID）

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeCodingCIJobsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeCodingCIJobsRequest: DescribeCodingCIJobsRequest; // (optional)

const { status, data } = await apiInstance.describeCodingCIJobs(
    describeCodingCIJobsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeCodingCIJobsRequest** | **DescribeCodingCIJobsRequest**|  | |


### Return type

**DescribeCodingCIJobs200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeCodingCurrentUser**
> DescribeCodingCurrentUser200Response describeCodingCurrentUser()

✨ 当前用户信息查询

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let body: object; // (optional)

const { status, data } = await apiInstance.describeCodingCurrentUser(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |


### Return type

**DescribeCodingCurrentUser200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeCodingProjects**
> DescribeCodingProjects200Response describeCodingProjects()

✨ 项目列表查询

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeCodingProjectsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeCodingProjectsRequest: DescribeCodingProjectsRequest; // (optional)

const { status, data } = await apiInstance.describeCodingProjects(
    describeCodingProjectsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeCodingProjectsRequest** | **DescribeCodingProjectsRequest**|  | |


### Return type

**DescribeCodingProjects200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeCommitRefs**
> DescribeCommitRefs200Response describeCommitRefs()

✨ 查询commit的ref信息

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeCommitRefsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeCommitRefsRequest: DescribeCommitRefsRequest; // (optional)

const { status, data } = await apiInstance.describeCommitRefs(
    describeCommitRefsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeCommitRefsRequest** | **DescribeCommitRefsRequest**|  | |


### Return type

**DescribeCommitRefs200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeCommitsBetweenCommitAndCommit**
> DescribeCommitsBetweenCommitAndCommit200Response describeCommitsBetweenCommitAndCommit()

✨ 查询两个请求之间的请求列表（source target顺序正常）

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeCommitsBetweenCommitAndCommitRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeCommitsBetweenCommitAndCommitRequest: DescribeCommitsBetweenCommitAndCommitRequest; // (optional)

const { status, data } = await apiInstance.describeCommitsBetweenCommitAndCommit(
    describeCommitsBetweenCommitAndCommitRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeCommitsBetweenCommitAndCommitRequest** | **DescribeCommitsBetweenCommitAndCommitRequest**|  | |


### Return type

**DescribeCommitsBetweenCommitAndCommit200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeConfigTemplateList**
> DescribeConfigTemplateList200Response describeConfigTemplateList()

✨ 获取配置方案

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeConfigTemplateListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeConfigTemplateListRequest: DescribeConfigTemplateListRequest; // (optional)

const { status, data } = await apiInstance.describeConfigTemplateList(
    describeConfigTemplateListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeConfigTemplateListRequest** | **DescribeConfigTemplateListRequest**|  | |


### Return type

**DescribeConfigTemplateList200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeDefectTypes**
> DescribeDefectTypes200Response describeDefectTypes()

✨ 缺陷类型列表查询

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeDefectTypesRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeDefectTypesRequest: DescribeDefectTypesRequest; // (optional)

const { status, data } = await apiInstance.describeDefectTypes(
    describeDefectTypesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeDefectTypesRequest** | **DescribeDefectTypesRequest**|  | |


### Return type

**DescribeDefectTypes200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeDepartment**
> DescribeDepartment200Response describeDepartment()

✨ 部门详情查询

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeDepartmentRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeDepartmentRequest: DescribeDepartmentRequest; // (optional)

const { status, data } = await apiInstance.describeDepartment(
    describeDepartmentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeDepartmentRequest** | **DescribeDepartmentRequest**|  | |


### Return type

**DescribeDepartment200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 正常返回 |  -  |
|**401** | Invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeDepartmentMembers**
> DescribeDepartmentMembers200Response describeDepartmentMembers()

✨ 获取部门成员列表（分页列表）查询选中部门下面所有的成员

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeDepartmentMembersRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeDepartmentMembersRequest: DescribeDepartmentMembersRequest; // (optional)

const { status, data } = await apiInstance.describeDepartmentMembers(
    describeDepartmentMembersRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeDepartmentMembersRequest** | **DescribeDepartmentMembersRequest**|  | |


### Return type

**DescribeDepartmentMembers200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 正常返回 |  -  |
|**401** | Invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeDepotByNameInfo**
> DescribeDepotByNameInfo200Response describeDepotByNameInfo()

✨ 查询项目下所有的仓库信息列表

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeDepotByNameInfoRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeDepotByNameInfoRequest: DescribeDepotByNameInfoRequest; // (optional)

const { status, data } = await apiInstance.describeDepotByNameInfo(
    describeDepotByNameInfoRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeDepotByNameInfoRequest** | **DescribeDepotByNameInfoRequest**|  | |


### Return type

**DescribeDepotByNameInfo200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeDepotDefaultBranch**
> DescribeDepotDefaultBranch200Response describeDepotDefaultBranch()

✨ 查询仓库的默认分支

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeDepotDefaultBranchRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeDepotDefaultBranchRequest: DescribeDepotDefaultBranchRequest; // (optional)

const { status, data } = await apiInstance.describeDepotDefaultBranch(
    describeDepotDefaultBranchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeDepotDefaultBranchRequest** | **DescribeDepotDefaultBranchRequest**|  | |


### Return type

**DescribeDepotDefaultBranch200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeDepotFilePushRules**
> DescribeDepotFilePushRules200Response describeDepotFilePushRules()

✨ 查询 git 仓库文件推送规则

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeDepotFilePushRulesRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeDepotFilePushRulesRequest: DescribeDepotFilePushRulesRequest; // (optional)

const { status, data } = await apiInstance.describeDepotFilePushRules(
    describeDepotFilePushRulesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeDepotFilePushRulesRequest** | **DescribeDepotFilePushRulesRequest**|  | |


### Return type

**DescribeDepotFilePushRules200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeDepotMergeRequests**
> DescribeDepotMergeRequests200Response describeDepotMergeRequests()

✨ 查询仓库合并请求列表

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeDepotMergeRequestsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeDepotMergeRequestsRequest: DescribeDepotMergeRequestsRequest; // (optional)

const { status, data } = await apiInstance.describeDepotMergeRequests(
    describeDepotMergeRequestsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeDepotMergeRequestsRequest** | **DescribeDepotMergeRequestsRequest**|  | |


### Return type

**DescribeDepotMergeRequests200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeDepotPushSetting**
> DescribeDepotPushSetting200Response describeDepotPushSetting()

✨ 查询仓库推送设置

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeDepotFilePushRulesRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeDepotFilePushRulesRequest: DescribeDepotFilePushRulesRequest; // (optional)

const { status, data } = await apiInstance.describeDepotPushSetting(
    describeDepotFilePushRulesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeDepotFilePushRulesRequest** | **DescribeDepotFilePushRulesRequest**|  | |


### Return type

**DescribeDepotPushSetting200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeDepotSpecDetail**
> ModifyChooseDepotSpec200Response describeDepotSpecDetail()

✨ 查询仓库规范详情

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeDepotSpecDetailRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeDepotSpecDetailRequest: DescribeDepotSpecDetailRequest; // (optional)

const { status, data } = await apiInstance.describeDepotSpecDetail(
    describeDepotSpecDetailRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeDepotSpecDetailRequest** | **DescribeDepotSpecDetailRequest**|  | |


### Return type

**ModifyChooseDepotSpec200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeDepotSpecs**
> DescribeDepotSpecs200Response describeDepotSpecs()

✨ 查询仓库规范列表

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let body: object; // (optional)

const { status, data } = await apiInstance.describeDepotSpecs(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |


### Return type

**DescribeDepotSpecs200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeDifferentBetween2Commits**
> DescribeDifferentBetween2Commits200Response describeDifferentBetween2Commits()

✨ 两次提交之间的文件差异

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeDifferentBetween2CommitsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeDifferentBetween2CommitsRequest: DescribeDifferentBetween2CommitsRequest; // (optional)

const { status, data } = await apiInstance.describeDifferentBetween2Commits(
    describeDifferentBetween2CommitsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeDifferentBetween2CommitsRequest** | **DescribeDifferentBetween2CommitsRequest**|  | |


### Return type

**DescribeDifferentBetween2Commits200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 正常返回 |  -  |
|**401** | Invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeDifferentBetweenTwoCommits**
> DescribeDifferentBetweenTwoCommits200Response describeDifferentBetweenTwoCommits()

✨ 获取两次 commit 之间的文件 差异详情

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeDifferentBetweenTwoCommitsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeDifferentBetweenTwoCommitsRequest: DescribeDifferentBetweenTwoCommitsRequest; // (optional)

const { status, data } = await apiInstance.describeDifferentBetweenTwoCommits(
    describeDifferentBetweenTwoCommitsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeDifferentBetweenTwoCommitsRequest** | **DescribeDifferentBetweenTwoCommitsRequest**|  | |


### Return type

**DescribeDifferentBetweenTwoCommits200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeGitBlameInfo**
> DescribeGitBlameInfo200Response describeGitBlameInfo()

✨ 获取指定 commit 下某文件指定代码行的最后一次提交

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeGitBlameInfoRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeGitBlameInfoRequest: DescribeGitBlameInfoRequest; // (optional)

const { status, data } = await apiInstance.describeGitBlameInfo(
    describeGitBlameInfoRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeGitBlameInfoRequest** | **DescribeGitBlameInfoRequest**|  | |


### Return type

**DescribeGitBlameInfo200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeGitBlob**
> DescribeGitBlob200Response describeGitBlob()

✨ 查询 Git Blob

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeGitBlobRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeGitBlobRequest: DescribeGitBlobRequest; // (optional)

const { status, data } = await apiInstance.describeGitBlob(
    describeGitBlobRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeGitBlobRequest** | **DescribeGitBlobRequest**|  | |


### Return type

**DescribeGitBlob200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeGitBlobRaw**
> DescribeGitBlobRaw200Response describeGitBlobRaw()

✨ 查询 Git Blob raw 信息

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeGitBlobRawRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeGitBlobRawRequest: DescribeGitBlobRawRequest; // (optional)

const { status, data } = await apiInstance.describeGitBlobRaw(
    describeGitBlobRawRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeGitBlobRawRequest** | **DescribeGitBlobRawRequest**|  | |


### Return type

**DescribeGitBlobRaw200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeGitBranch**
> DescribeGitBranch200Response describeGitBranch()

✨ 查询代码仓库单个分支

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeGitBranchRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeGitBranchRequest: DescribeGitBranchRequest; // (optional)

const { status, data } = await apiInstance.describeGitBranch(
    describeGitBranchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeGitBranchRequest** | **DescribeGitBranchRequest**|  | |


### Return type

**DescribeGitBranch200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeGitBranchList**
> DescribeGitBranchList200Response describeGitBranchList()

✨ 查询仓库分支列表

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeGitBranchListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeGitBranchListRequest: DescribeGitBranchListRequest; // (optional)

const { status, data } = await apiInstance.describeGitBranchList(
    describeGitBranchListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeGitBranchListRequest** | **DescribeGitBranchListRequest**|  | |


### Return type

**DescribeGitBranchList200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeGitBranches**
> DescribeGitBranches200Response describeGitBranches()

✨ 查询仓库下所有分支列表

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeGitBranchesRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeGitBranchesRequest: DescribeGitBranchesRequest; // (optional)

const { status, data } = await apiInstance.describeGitBranches(
    describeGitBranchesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeGitBranchesRequest** | **DescribeGitBranchesRequest**|  | |


### Return type

**DescribeGitBranches200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeGitBranchesBySha**
> DescribeGitBranchesBySha200Response describeGitBranchesBySha()

✨ 根据sha值查询所在分支

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeGitBranchesByShaRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeGitBranchesByShaRequest: DescribeGitBranchesByShaRequest; // (optional)

const { status, data } = await apiInstance.describeGitBranchesBySha(
    describeGitBranchesByShaRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeGitBranchesByShaRequest** | **DescribeGitBranchesByShaRequest**|  | |


### Return type

**DescribeGitBranchesBySha200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeGitCommitComments**
> DescribeGitCommitComments200Response describeGitCommitComments()

✨ 获取commit评论

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeGitCommitCommentsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeGitCommitCommentsRequest: DescribeGitCommitCommentsRequest; // (optional)

const { status, data } = await apiInstance.describeGitCommitComments(
    describeGitCommitCommentsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeGitCommitCommentsRequest** | **DescribeGitCommitCommentsRequest**|  | |


### Return type

**DescribeGitCommitComments200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeGitCommitDiff**
> DescribeGitCommitDiff200Response describeGitCommitDiff()

✨ 查询某次提交的diff信息

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeGitCommitDiffRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeGitCommitDiffRequest: DescribeGitCommitDiffRequest; // (optional)

const { status, data } = await apiInstance.describeGitCommitDiff(
    describeGitCommitDiffRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeGitCommitDiffRequest** | **DescribeGitCommitDiffRequest**|  | |


### Return type

**DescribeGitCommitDiff200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeGitCommitFilePathList**
> DescribeGitCommitFilePathList200Response describeGitCommitFilePathList()

✨ 查询仓库某次提交改动的文件路径列表

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeGitCommitFilePathListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeGitCommitFilePathListRequest: DescribeGitCommitFilePathListRequest; // (optional)

const { status, data } = await apiInstance.describeGitCommitFilePathList(
    describeGitCommitFilePathListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeGitCommitFilePathListRequest** | **DescribeGitCommitFilePathListRequest**|  | |


### Return type

**DescribeGitCommitFilePathList200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeGitCommitInfo**
> DescribeGitCommitInfo200Response describeGitCommitInfo()

✨ 查询单个请求详情信息

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeGitCommitInfoRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeGitCommitInfoRequest: DescribeGitCommitInfoRequest; // (optional)

const { status, data } = await apiInstance.describeGitCommitInfo(
    describeGitCommitInfoRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeGitCommitInfoRequest** | **DescribeGitCommitInfoRequest**|  | |


### Return type

**DescribeGitCommitInfo200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeGitCommitInfos**
> DescribeGitCommitInfos200Response describeGitCommitInfos()

✨ 查询仓库分支下提交列表

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeGitCommitInfosRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeGitCommitInfosRequest: DescribeGitCommitInfosRequest; // (optional)

const { status, data } = await apiInstance.describeGitCommitInfos(
    describeGitCommitInfosRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeGitCommitInfosRequest** | **DescribeGitCommitInfosRequest**|  | |


### Return type

**DescribeGitCommitInfos200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeGitCommitNote**
> DescribeGitCommitNote200Response describeGitCommitNote()

✨ 获取提交注释

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeGitCommitNoteRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeGitCommitNoteRequest: DescribeGitCommitNoteRequest; // (optional)

const { status, data } = await apiInstance.describeGitCommitNote(
    describeGitCommitNoteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeGitCommitNoteRequest** | **DescribeGitCommitNoteRequest**|  | |


### Return type

**DescribeGitCommitNote200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeGitCommitStatus**
> DescribeGitCommitStatus200Response describeGitCommitStatus()

✨ 查询提交对应的流水线状态

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeGitCommitStatusRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeGitCommitStatusRequest: DescribeGitCommitStatusRequest; // (optional)

const { status, data } = await apiInstance.describeGitCommitStatus(
    describeGitCommitStatusRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeGitCommitStatusRequest** | **DescribeGitCommitStatusRequest**|  | |


### Return type

**DescribeGitCommitStatus200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeGitCommitsInPage**
> DescribeGitCommitsInPage200Response describeGitCommitsInPage()

✨ 查询仓库分支下提交列表

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeGitCommitInfosRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeGitCommitInfosRequest: DescribeGitCommitInfosRequest; // (optional)

const { status, data } = await apiInstance.describeGitCommitsInPage(
    describeGitCommitInfosRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeGitCommitInfosRequest** | **DescribeGitCommitInfosRequest**|  | |


### Return type

**DescribeGitCommitsInPage200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeGitContributors**
> DescribeGitContributors200Response describeGitContributors()

✨ 查询 git 仓库的贡献者

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeGitContributorsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeGitContributorsRequest: DescribeGitContributorsRequest; // (optional)

const { status, data } = await apiInstance.describeGitContributors(
    describeGitContributorsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeGitContributorsRequest** | **DescribeGitContributorsRequest**|  | |


### Return type

**DescribeGitContributors200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeGitDepot**
> DescribeGitDepot200Response describeGitDepot()

✨ 根据代码仓库id获取代码仓库信息

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeGitDepotRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeGitDepotRequest: DescribeGitDepotRequest; // (optional)

const { status, data } = await apiInstance.describeGitDepot(
    describeGitDepotRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeGitDepotRequest** | **DescribeGitDepotRequest**|  | |


### Return type

**DescribeGitDepot200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeGitDepotDeployKeys**
> DescribeGitDepotDeployKeys200Response describeGitDepotDeployKeys()

✨ 查询某仓库下的部署公钥列表

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeGitDepotDeployKeysRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeGitDepotDeployKeysRequest: DescribeGitDepotDeployKeysRequest; // (optional)

const { status, data } = await apiInstance.describeGitDepotDeployKeys(
    describeGitDepotDeployKeysRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeGitDepotDeployKeysRequest** | **DescribeGitDepotDeployKeysRequest**|  | |


### Return type

**DescribeGitDepotDeployKeys200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeGitFile**
> DescribeGitFile200Response describeGitFile()

✨ 获取文件详情

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeGitFileRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeGitFileRequest: DescribeGitFileRequest; // (optional)

const { status, data } = await apiInstance.describeGitFile(
    describeGitFileRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeGitFileRequest** | **DescribeGitFileRequest**|  | |


### Return type

**DescribeGitFile200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeGitFileContent**
> DescribeGitFileContent200Response describeGitFileContent()

✨ 查询某次提交某文件的内容

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeGitFileContentRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeGitFileContentRequest: DescribeGitFileContentRequest; // (optional)

const { status, data } = await apiInstance.describeGitFileContent(
    describeGitFileContentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeGitFileContentRequest** | **DescribeGitFileContentRequest**|  | |


### Return type

**DescribeGitFileContent200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeGitFileStat**
> DescribeGitFileStat200Response describeGitFileStat()

✨ 检查仓库文件

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeGitFileStatRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeGitFileStatRequest: DescribeGitFileStatRequest; // (optional)

const { status, data } = await apiInstance.describeGitFileStat(
    describeGitFileStatRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeGitFileStatRequest** | **DescribeGitFileStatRequest**|  | |


### Return type

**DescribeGitFileStat200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeGitFiles**
> DescribeGitFiles200Response describeGitFiles()

✨ 获取分支目录结构

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeGitFilesRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeGitFilesRequest: DescribeGitFilesRequest; // (optional)

const { status, data } = await apiInstance.describeGitFiles(
    describeGitFilesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeGitFilesRequest** | **DescribeGitFilesRequest**|  | |


### Return type

**DescribeGitFiles200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeGitMergeBase**
> DescribeGitMergeBase200Response describeGitMergeBase()

✨ 查询两个分支的公共祖先

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeGitMergeBaseRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeGitMergeBaseRequest: DescribeGitMergeBaseRequest; // (optional)

const { status, data } = await apiInstance.describeGitMergeBase(
    describeGitMergeBaseRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeGitMergeBaseRequest** | **DescribeGitMergeBaseRequest**|  | |


### Return type

**DescribeGitMergeBase200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeGitMergeRequestDiffDetail**
> DescribeGitMergeRequestDiffDetail200Response describeGitMergeRequestDiffDetail()

✨ 查询合并请求文件的 diff 详情

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeGitMergeRequestDiffDetailRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeGitMergeRequestDiffDetailRequest: DescribeGitMergeRequestDiffDetailRequest; // (optional)

const { status, data } = await apiInstance.describeGitMergeRequestDiffDetail(
    describeGitMergeRequestDiffDetailRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeGitMergeRequestDiffDetailRequest** | **DescribeGitMergeRequestDiffDetailRequest**|  | |


### Return type

**DescribeGitMergeRequestDiffDetail200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeGitMergeRequestDiffs**
> DescribeGitMergeRequestDiffs200Response describeGitMergeRequestDiffs()

✨ 查询合并请求 diff 信息的文件列表

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeGitMergeRequestDiffsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeGitMergeRequestDiffsRequest: DescribeGitMergeRequestDiffsRequest; // (optional)

const { status, data } = await apiInstance.describeGitMergeRequestDiffs(
    describeGitMergeRequestDiffsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeGitMergeRequestDiffsRequest** | **DescribeGitMergeRequestDiffsRequest**|  | |


### Return type

**DescribeGitMergeRequestDiffs200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeGitMergeRequestParticipants**
> DescribeGitMergeRequestParticipants200Response describeGitMergeRequestParticipants()

✨ 获取合并请求的参与者

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeGitMergeRequestParticipantsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeGitMergeRequestParticipantsRequest: DescribeGitMergeRequestParticipantsRequest; // (optional)

const { status, data } = await apiInstance.describeGitMergeRequestParticipants(
    describeGitMergeRequestParticipantsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeGitMergeRequestParticipantsRequest** | **DescribeGitMergeRequestParticipantsRequest**|  | |


### Return type

**DescribeGitMergeRequestParticipants200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeGitMergeRequestsBySha**
> DescribeGitMergeRequestsBySha200Response describeGitMergeRequestsBySha()

✨ 查询含有某次提交的合并请求

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeGitMergeRequestsByShaRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeGitMergeRequestsByShaRequest: DescribeGitMergeRequestsByShaRequest; // (optional)

const { status, data } = await apiInstance.describeGitMergeRequestsBySha(
    describeGitMergeRequestsByShaRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeGitMergeRequestsByShaRequest** | **DescribeGitMergeRequestsByShaRequest**|  | |


### Return type

**DescribeGitMergeRequestsBySha200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeGitProjectDeployKeys**
> DescribeGitDepotDeployKeys200Response describeGitProjectDeployKeys()

✨ 查询某项目下的部署公钥列表

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeGitProjectDeployKeysRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeGitProjectDeployKeysRequest: DescribeGitProjectDeployKeysRequest; // (optional)

const { status, data } = await apiInstance.describeGitProjectDeployKeys(
    describeGitProjectDeployKeysRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeGitProjectDeployKeysRequest** | **DescribeGitProjectDeployKeysRequest**|  | |


### Return type

**DescribeGitDepotDeployKeys200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeGitProtectedTags**
> DescribeGitProtectedTags200Response describeGitProtectedTags()

✨ 查询受保护的标签列表

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeGitProtectedTagsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeGitProtectedTagsRequest: DescribeGitProtectedTagsRequest; // (optional)

const { status, data } = await apiInstance.describeGitProtectedTags(
    describeGitProtectedTagsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeGitProtectedTagsRequest** | **DescribeGitProtectedTagsRequest**|  | |


### Return type

**DescribeGitProtectedTags200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeGitProtectedTagsByRule**
> DescribeGitProtectedTagsByRule200Response describeGitProtectedTagsByRule()

✨ 根据标签保护规则查询受保护的标签列表

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeGitProtectedTagsByRuleRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeGitProtectedTagsByRuleRequest: DescribeGitProtectedTagsByRuleRequest; // (optional)

const { status, data } = await apiInstance.describeGitProtectedTagsByRule(
    describeGitProtectedTagsByRuleRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeGitProtectedTagsByRuleRequest** | **DescribeGitProtectedTagsByRuleRequest**|  | |


### Return type

**DescribeGitProtectedTagsByRule200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeGitRef**
> DescribeGitRef200Response describeGitRef()

✨ 获取分支或标签信息

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeGitRefRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeGitRefRequest: DescribeGitRefRequest; // (optional)

const { status, data } = await apiInstance.describeGitRef(
    describeGitRefRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeGitRefRequest** | **DescribeGitRefRequest**|  | |


### Return type

**DescribeGitRef200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeGitRefsBySha**
> DescribeGitRefsBySha200Response describeGitRefsBySha()

✨ 查询含有某次提交的标签或分支列表

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeGitRefsByShaRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeGitRefsByShaRequest: DescribeGitRefsByShaRequest; // (optional)

const { status, data } = await apiInstance.describeGitRefsBySha(
    describeGitRefsByShaRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeGitRefsByShaRequest** | **DescribeGitRefsByShaRequest**|  | |


### Return type

**DescribeGitRefsBySha200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeGitReleaseDetail**
> DescribeGitReleaseDetail200Response describeGitReleaseDetail()

✨ 查询仓库的版本详情

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeGitReleaseDetailRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeGitReleaseDetailRequest: DescribeGitReleaseDetailRequest; // (optional)

const { status, data } = await apiInstance.describeGitReleaseDetail(
    describeGitReleaseDetailRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeGitReleaseDetailRequest** | **DescribeGitReleaseDetailRequest**|  | |


### Return type

**DescribeGitReleaseDetail200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeGitReleases**
> DescribeGitReleases200Response describeGitReleases()

✨ 查询仓库的版本列表

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeGitReleasesRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeGitReleasesRequest: DescribeGitReleasesRequest; // (optional)

const { status, data } = await apiInstance.describeGitReleases(
    describeGitReleasesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeGitReleasesRequest** | **DescribeGitReleasesRequest**|  | |


### Return type

**DescribeGitReleases200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeGitTag**
> DescribeGitTag200Response describeGitTag()

✨ 查询单个tag

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeGitTagRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeGitTagRequest: DescribeGitTagRequest; // (optional)

const { status, data } = await apiInstance.describeGitTag(
    describeGitTagRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeGitTagRequest** | **DescribeGitTagRequest**|  | |


### Return type

**DescribeGitTag200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeGitTags**
> DescribeGitTags200Response describeGitTags()

✨ 查询当前仓库下所有tags

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeGitTagsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeGitTagsRequest: DescribeGitTagsRequest; // (optional)

const { status, data } = await apiInstance.describeGitTags(
    describeGitTagsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeGitTagsRequest** | **DescribeGitTagsRequest**|  | |


### Return type

**DescribeGitTags200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeGitTagsByBranch**
> DescribeGitTagsByBranch200Response describeGitTagsByBranch()

✨ 根据分支获取标签列表

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeGitTagsByBranchRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeGitTagsByBranchRequest: DescribeGitTagsByBranchRequest; // (optional)

const { status, data } = await apiInstance.describeGitTagsByBranch(
    describeGitTagsByBranchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeGitTagsByBranchRequest** | **DescribeGitTagsByBranchRequest**|  | |


### Return type

**DescribeGitTagsByBranch200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeGitTagsBySha**
> DescribeGitTagsBySha200Response describeGitTagsBySha()

✨ 查询含有某次提交的标签列表

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeGitTagsByShaRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeGitTagsByShaRequest: DescribeGitTagsByShaRequest; // (optional)

const { status, data } = await apiInstance.describeGitTagsBySha(
    describeGitTagsByShaRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeGitTagsByShaRequest** | **DescribeGitTagsByShaRequest**|  | |


### Return type

**DescribeGitTagsBySha200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeGitTree**
> DescribeGitTree200Response describeGitTree()

✨ 查询 git 仓库的树

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeGitTreeRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeGitTreeRequest: DescribeGitTreeRequest; // (optional)

const { status, data } = await apiInstance.describeGitTree(
    describeGitTreeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeGitTreeRequest** | **DescribeGitTreeRequest**|  | |


### Return type

**DescribeGitTree200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeGrantObjectsOnResource**
> DescribeGrantObjectsOnResource200Response describeGrantObjectsOnResource()

✨ 授权对象列表分页查询

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeGrantObjectsOnResourceRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeGrantObjectsOnResourceRequest: DescribeGrantObjectsOnResourceRequest; // (optional)

const { status, data } = await apiInstance.describeGrantObjectsOnResource(
    describeGrantObjectsOnResourceRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeGrantObjectsOnResourceRequest** | **DescribeGrantObjectsOnResourceRequest**|  | |


### Return type

**DescribeGrantObjectsOnResource200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeGrantUsersOnResource**
> DescribeGrantUsersOnResource200Response describeGrantUsersOnResource()

✨ 查询指定资源下授权的用户列表，包括容器内的用户

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeGrantUsersOnResourceRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeGrantUsersOnResourceRequest: DescribeGrantUsersOnResourceRequest; // (optional)

const { status, data } = await apiInstance.describeGrantUsersOnResource(
    describeGrantUsersOnResourceRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeGrantUsersOnResourceRequest** | **DescribeGrantUsersOnResourceRequest**|  | |


### Return type

**DescribeGrantUsersOnResource200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 正常返回 |  -  |
|**401** | Invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeHostServerInstance**
> DescribeHostServerInstance200Response describeHostServerInstance()

✨ CD 主机组部署详情获取

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeHostServerInstanceRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeHostServerInstanceRequest: DescribeHostServerInstanceRequest; // (optional)

const { status, data } = await apiInstance.describeHostServerInstance(
    describeHostServerInstanceRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeHostServerInstanceRequest** | **DescribeHostServerInstanceRequest**|  | |


### Return type

**DescribeHostServerInstance200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 正常返回 |  -  |
|**401** | Invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeIssue**
> DescribeIssue200Response describeIssue()

✨ 查询事项详情

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeIssueRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeIssueRequest: DescribeIssueRequest; // (optional)

const { status, data } = await apiInstance.describeIssue(
    describeIssueRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeIssueRequest** | **DescribeIssueRequest**|  | |


### Return type

**DescribeIssue200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeIssueAttachmentPreSignedUrl**
> DescribeIssueAttachmentPreSignedUrl200Response describeIssueAttachmentPreSignedUrl()

✨ 拿到预签名，上传文件

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeIssueAttachmentPreSignedUrlRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeIssueAttachmentPreSignedUrlRequest: DescribeIssueAttachmentPreSignedUrlRequest; // (optional)

const { status, data } = await apiInstance.describeIssueAttachmentPreSignedUrl(
    describeIssueAttachmentPreSignedUrlRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeIssueAttachmentPreSignedUrlRequest** | **DescribeIssueAttachmentPreSignedUrlRequest**|  | |


### Return type

**DescribeIssueAttachmentPreSignedUrl200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 正常返回 |  -  |
|**401** | Invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeIssueByStatusUpdate**
> DescribeIssueByStatusUpdate200Response describeIssueByStatusUpdate()

✨ 通过状态以及状态的更新时间查询事项列表

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeIssueByStatusUpdateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeIssueByStatusUpdateRequest: DescribeIssueByStatusUpdateRequest; // (optional)

const { status, data } = await apiInstance.describeIssueByStatusUpdate(
    describeIssueByStatusUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeIssueByStatusUpdateRequest** | **DescribeIssueByStatusUpdateRequest**|  | |


### Return type

**DescribeIssueByStatusUpdate200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeIssueCommentList**
> DescribeIssueCommentList200Response describeIssueCommentList()

✨ 查询事项评论列表

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeIssueCommentListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeIssueCommentListRequest: DescribeIssueCommentListRequest; // (optional)

const { status, data } = await apiInstance.describeIssueCommentList(
    describeIssueCommentListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeIssueCommentListRequest** | **DescribeIssueCommentListRequest**|  | |


### Return type

**DescribeIssueCommentList200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeIssueCustomFieldLogList**
> DescribeIssueCustomFieldLogList200Response describeIssueCustomFieldLogList()

✨ 获取某个事项的自定义属性变更日志

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeIssueCustomFieldLogListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeIssueCustomFieldLogListRequest: DescribeIssueCustomFieldLogListRequest; // (optional)

const { status, data } = await apiInstance.describeIssueCustomFieldLogList(
    describeIssueCustomFieldLogListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeIssueCustomFieldLogListRequest** | **DescribeIssueCustomFieldLogListRequest**|  | |


### Return type

**DescribeIssueCustomFieldLogList200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeIssueFileUrl**
> DescribeIssueFileUrl200Response describeIssueFileUrl()

✨ 查询事项附件的下载地址

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeIssueFileUrlRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeIssueFileUrlRequest: DescribeIssueFileUrlRequest; // (optional)

const { status, data } = await apiInstance.describeIssueFileUrl(
    describeIssueFileUrlRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeIssueFileUrlRequest** | **DescribeIssueFileUrlRequest**|  | |


### Return type

**DescribeIssueFileUrl200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeIssueFilterList**
> DescribeIssueFilterList200Response describeIssueFilterList()

✨ 查询事项筛选器列表

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeIssueFilterListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeIssueFilterListRequest: DescribeIssueFilterListRequest; // (optional)

const { status, data } = await apiInstance.describeIssueFilterList(
    describeIssueFilterListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeIssueFilterListRequest** | **DescribeIssueFilterListRequest**|  | |


### Return type

**DescribeIssueFilterList200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeIssueList**
> DescribeIssueList200Response describeIssueList()

✨ 查询事项列表

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeIssueListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeIssueListRequest: DescribeIssueListRequest; // (optional)

const { status, data } = await apiInstance.describeIssueList(
    describeIssueListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeIssueListRequest** | **DescribeIssueListRequest**|  | |


### Return type

**DescribeIssueList200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeIssueListWithPage**
> DescribeIssueListWithPage200Response describeIssueListWithPage()

✨ 事项列表（新），返回分页信息

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeIssueListWithPageRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeIssueListWithPageRequest: DescribeIssueListWithPageRequest; // (optional)

const { status, data } = await apiInstance.describeIssueListWithPage(
    describeIssueListWithPageRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeIssueListWithPageRequest** | **DescribeIssueListWithPageRequest**|  | |


### Return type

**DescribeIssueListWithPage200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeIssueLogList**
> DescribeIssueLogList200Response describeIssueLogList()

✨ 获取某个事项的活动日志

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeIssueLogListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeIssueLogListRequest: DescribeIssueLogListRequest; // (optional)

const { status, data } = await apiInstance.describeIssueLogList(
    describeIssueLogListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeIssueLogListRequest** | **DescribeIssueLogListRequest**|  | |


### Return type

**DescribeIssueLogList200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 正常返回 |  -  |
|**401** | Invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeIssueModuleList**
> DescribeIssueModuleList200Response describeIssueModuleList()

✨ 查询事项模块列表

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeWikiListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeWikiListRequest: DescribeWikiListRequest; // (optional)

const { status, data } = await apiInstance.describeIssueModuleList(
    describeWikiListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeWikiListRequest** | **DescribeWikiListRequest**|  | |


### Return type

**DescribeIssueModuleList200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeIssueReferenceResources**
> DescribeIssueReferenceResources200Response describeIssueReferenceResources()

✨ 查询事项的引用资源列表

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeIssueReferenceResourcesRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeIssueReferenceResourcesRequest: DescribeIssueReferenceResourcesRequest; // (optional)

const { status, data } = await apiInstance.describeIssueReferenceResources(
    describeIssueReferenceResourcesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeIssueReferenceResourcesRequest** | **DescribeIssueReferenceResourcesRequest**|  | |


### Return type

**DescribeIssueReferenceResources200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeIssueRelatedRepos**
> DescribeIssueRelatedRepos200Response describeIssueRelatedRepos()

✨ 查询事项关联的代码仓库信息

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeIssueRelatedReposRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeIssueRelatedReposRequest: DescribeIssueRelatedReposRequest; // (optional)

const { status, data } = await apiInstance.describeIssueRelatedRepos(
    describeIssueRelatedReposRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeIssueRelatedReposRequest** | **DescribeIssueRelatedReposRequest**|  | |


### Return type

**DescribeIssueRelatedRepos200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeIssueRelatedWorkItemList**
> DescribeIssueRelatedWorkItemList200Response describeIssueRelatedWorkItemList()

✨ 查询事项关联的项目集中的工作项

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeIssueRelatedWorkItemListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeIssueRelatedWorkItemListRequest: DescribeIssueRelatedWorkItemListRequest; // (optional)

const { status, data } = await apiInstance.describeIssueRelatedWorkItemList(
    describeIssueRelatedWorkItemListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeIssueRelatedWorkItemListRequest** | **DescribeIssueRelatedWorkItemListRequest**|  | |


### Return type

**DescribeIssueRelatedWorkItemList200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeIssueReleaseList**
> DescribeIssueReleaseList200Response describeIssueReleaseList()

✨ 获取某个事项加入的所有版本

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeIssueRelatedReposRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeIssueRelatedReposRequest: DescribeIssueRelatedReposRequest; // (optional)

const { status, data } = await apiInstance.describeIssueReleaseList(
    describeIssueRelatedReposRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeIssueRelatedReposRequest** | **DescribeIssueRelatedReposRequest**|  | |


### Return type

**DescribeIssueReleaseList200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeIssueStatusChangeLogList**
> DescribeIssueStatusChangeLogList200Response describeIssueStatusChangeLogList()

✨ 状态变更记录

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeIssueStatusChangeLogListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeIssueStatusChangeLogListRequest: DescribeIssueStatusChangeLogListRequest; // (optional)

const { status, data } = await apiInstance.describeIssueStatusChangeLogList(
    describeIssueStatusChangeLogListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeIssueStatusChangeLogListRequest** | **DescribeIssueStatusChangeLogListRequest**|  | |


### Return type

**DescribeIssueStatusChangeLogList200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeIssueWorkLogList**
> DescribeIssueWorkLogList200Response describeIssueWorkLogList()

✨ 查询工时日志列表

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeIssueWorkLogListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeIssueWorkLogListRequest: DescribeIssueWorkLogListRequest; // (optional)

const { status, data } = await apiInstance.describeIssueWorkLogList(
    describeIssueWorkLogListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeIssueWorkLogListRequest** | **DescribeIssueWorkLogListRequest**|  | |


### Return type

**DescribeIssueWorkLogList200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeIteration**
> DescribeIteration200Response describeIteration()

✨ 查询迭代详情

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DeleteIterationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let deleteIterationRequest: DeleteIterationRequest; // (optional)

const { status, data } = await apiInstance.describeIteration(
    deleteIterationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteIterationRequest** | **DeleteIterationRequest**|  | |


### Return type

**DescribeIteration200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeIterationList**
> DescribeIterationList200Response describeIterationList()

✨ 迭代列表

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeIterationListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeIterationListRequest: DescribeIterationListRequest; // (optional)

const { status, data } = await apiInstance.describeIterationList(
    describeIterationListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeIterationListRequest** | **DescribeIterationListRequest**|  | |


### Return type

**DescribeIterationList200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeMemberSshKey**
> DescribeMemberSshKey200Response describeMemberSshKey()

✨ 获取团队成员的 SSH 公钥列表

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeMemberSshKeyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeMemberSshKeyRequest: DescribeMemberSshKeyRequest; // (optional)

const { status, data } = await apiInstance.describeMemberSshKey(
    describeMemberSshKeyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeMemberSshKeyRequest** | **DescribeMemberSshKeyRequest**|  | |


### Return type

**DescribeMemberSshKey200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeMergeReqCommits**
> DescribeMergeReqCommits200Response describeMergeReqCommits()

✨ 查询合并请求列表

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeMergeReqCommitsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeMergeReqCommitsRequest: DescribeMergeReqCommitsRequest; // (optional)

const { status, data } = await apiInstance.describeMergeReqCommits(
    describeMergeReqCommitsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeMergeReqCommitsRequest** | **DescribeMergeReqCommitsRequest**|  | |


### Return type

**DescribeMergeReqCommits200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeMergeReqInfo**
> DescribeMergeReqInfo200Response describeMergeReqInfo()

✨ 查询合并请求详情

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeMergeReqInfoRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeMergeReqInfoRequest: DescribeMergeReqInfoRequest; // (optional)

const { status, data } = await apiInstance.describeMergeReqInfo(
    describeMergeReqInfoRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeMergeReqInfoRequest** | **DescribeMergeReqInfoRequest**|  | |


### Return type

**DescribeMergeReqInfo200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeMergeRequest**
> DescribeMergeRequest200Response describeMergeRequest()

✨ 查询合并请求详情信息

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeMergeRequestRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeMergeRequestRequest: DescribeMergeRequestRequest; // (optional)

const { status, data } = await apiInstance.describeMergeRequest(
    describeMergeRequestRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeMergeRequestRequest** | **DescribeMergeRequestRequest**|  | |


### Return type

**DescribeMergeRequest200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeMergeRequestFileDiff**
> DescribeMergeRequestFileDiff200Response describeMergeRequestFileDiff()

✨ 获取合并请求文件修改记录

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeMergeRequestFileDiffRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeMergeRequestFileDiffRequest: DescribeMergeRequestFileDiffRequest; // (optional)

const { status, data } = await apiInstance.describeMergeRequestFileDiff(
    describeMergeRequestFileDiffRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeMergeRequestFileDiffRequest** | **DescribeMergeRequestFileDiffRequest**|  | |


### Return type

**DescribeMergeRequestFileDiff200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeMergeRequestLog**
> DescribeMergeRequestLog200Response describeMergeRequestLog()

✨ 查询合并请求操作记录

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyCloseMRRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyCloseMRRequest: ModifyCloseMRRequest; // (optional)

const { status, data } = await apiInstance.describeMergeRequestLog(
    modifyCloseMRRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyCloseMRRequest** | **ModifyCloseMRRequest**|  | |


### Return type

**DescribeMergeRequestLog200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeMergeRequestReviewers**
> DescribeMergeRequestReviewers200Response describeMergeRequestReviewers()

✨ 获取合并请求的参与者

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeMergeRequestReviewersRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeMergeRequestReviewersRequest: DescribeMergeRequestReviewersRequest; // (optional)

const { status, data } = await apiInstance.describeMergeRequestReviewers(
    describeMergeRequestReviewersRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeMergeRequestReviewersRequest** | **DescribeMergeRequestReviewersRequest**|  | |


### Return type

**DescribeMergeRequestReviewers200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeMyDepots**
> DescribeMyDepots200Response describeMyDepots()

✨ 获取当前用户拥有读权限的仓库列表

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeMyDepotsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeMyDepotsRequest: DescribeMyDepotsRequest; // (optional)

const { status, data } = await apiInstance.describeMyDepots(
    describeMyDepotsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeMyDepotsRequest** | **DescribeMyDepotsRequest**|  | |


### Return type

**DescribeMyDepots200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeNotesByCommits**
> DescribeNotesByCommits200Response describeNotesByCommits()

✨ 获取提交的note信息

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeNotesByCommitsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeNotesByCommitsRequest: DescribeNotesByCommitsRequest; // (optional)

const { status, data } = await apiInstance.describeNotesByCommits(
    describeNotesByCommitsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeNotesByCommitsRequest** | **DescribeNotesByCommitsRequest**|  | |


### Return type

**DescribeNotesByCommits200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeOneProject**
> DescribeOneProject200Response describeOneProject()

✨ 单个项目查询

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeOneProjectRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeOneProjectRequest: DescribeOneProjectRequest; // (optional)

const { status, data } = await apiInstance.describeOneProject(
    describeOneProjectRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeOneProjectRequest** | **DescribeOneProjectRequest**|  | |


### Return type

**DescribeOneProject200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describePersonalExternalDepots**
> DescribePersonalExternalDepots200Response describePersonalExternalDepots()

✨ 获取个人外部仓库

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribePersonalExternalDepotsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describePersonalExternalDepotsRequest: DescribePersonalExternalDepotsRequest; // (optional)

const { status, data } = await apiInstance.describePersonalExternalDepots(
    describePersonalExternalDepotsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describePersonalExternalDepotsRequest** | **DescribePersonalExternalDepotsRequest**|  | |


### Return type

**DescribePersonalExternalDepots200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describePinyin**
> DescribePinyin200Response describePinyin()

✨ 汉字转拼音

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribePinyinRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describePinyinRequest: DescribePinyinRequest; // (optional)

const { status, data } = await apiInstance.describePinyin(
    describePinyinRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describePinyinRequest** | **DescribePinyinRequest**|  | |


### Return type

**DescribePinyin200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 正常返回 |  -  |
|**401** | Invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describePoliciesOnResourceType**
> DescribePoliciesOnResourceType200Response describePoliciesOnResourceType()

✨ 权限组列表查询（指定资源类型）

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribePoliciesOnResourceTypeRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describePoliciesOnResourceTypeRequest: DescribePoliciesOnResourceTypeRequest; // (optional)

const { status, data } = await apiInstance.describePoliciesOnResourceType(
    describePoliciesOnResourceTypeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describePoliciesOnResourceTypeRequest** | **DescribePoliciesOnResourceTypeRequest**|  | |


### Return type

**DescribePoliciesOnResourceType200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describePolicy**
> DescribePolicy200Response describePolicy()

✨ 权限组详情获取

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribePolicyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describePolicyRequest: DescribePolicyRequest; // (optional)

const { status, data } = await apiInstance.describePolicy(
    describePolicyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describePolicyRequest** | **DescribePolicyRequest**|  | |


### Return type

**DescribePolicy200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describePreSignUploadUrl**
> DescribePreSignUploadUrl200Response describePreSignUploadUrl()

✨ 预签名信息获取，上传文件

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribePreSignUploadUrlRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describePreSignUploadUrlRequest: DescribePreSignUploadUrlRequest; // (optional)

const { status, data } = await apiInstance.describePreSignUploadUrl(
    describePreSignUploadUrlRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describePreSignUploadUrlRequest** | **DescribePreSignUploadUrlRequest**|  | |


### Return type

**DescribePreSignUploadUrl200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 正常返回 |  -  |
|**401** | Invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describePredicatePolicyOnResource**
> DescribePredicatePolicyOnResource200Response describePredicatePolicyOnResource()

✨ 资源权限判定模式获取

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribePredicatePolicyOnResourceRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describePredicatePolicyOnResourceRequest: DescribePredicatePolicyOnResourceRequest; // (optional)

const { status, data } = await apiInstance.describePredicatePolicyOnResource(
    describePredicatePolicyOnResourceRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describePredicatePolicyOnResourceRequest** | **DescribePredicatePolicyOnResourceRequest**|  | |


### Return type

**DescribePredicatePolicyOnResource200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeProgramProjects**
> DescribeProgramProjects200Response describeProgramProjects()

✨ 项目集下项目列表查询

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeProgramProjectsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeProgramProjectsRequest: DescribeProgramProjectsRequest; // (optional)

const { status, data } = await apiInstance.describeProgramProjects(
    describeProgramProjectsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeProgramProjectsRequest** | **DescribeProgramProjectsRequest**|  | |


### Return type

**DescribeProgramProjects200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describePrograms**
> DescribePrograms200Response describePrograms()

✨ 项目集列表查询

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeProgramsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeProgramsRequest: DescribeProgramsRequest; // (optional)

const { status, data } = await apiInstance.describePrograms(
    describeProgramsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeProgramsRequest** | **DescribeProgramsRequest**|  | |


### Return type

**DescribePrograms200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeProjectAnnouncement**
> CreateProjectAnnouncement200Response describeProjectAnnouncement()

✨ 项目公告查询

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeProjectAnnouncementRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeProjectAnnouncementRequest: DescribeProjectAnnouncementRequest; // (optional)

const { status, data } = await apiInstance.describeProjectAnnouncement(
    describeProjectAnnouncementRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeProjectAnnouncementRequest** | **DescribeProjectAnnouncementRequest**|  | |


### Return type

**CreateProjectAnnouncement200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 正常返回 |  -  |
|**401** | Invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeProjectAnnouncements**
> DescribeProjectAnnouncements200Response describeProjectAnnouncements()

✨ 项目公告列表查询

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeProjectAnnouncementsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeProjectAnnouncementsRequest: DescribeProjectAnnouncementsRequest; // (optional)

const { status, data } = await apiInstance.describeProjectAnnouncements(
    describeProjectAnnouncementsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeProjectAnnouncementsRequest** | **DescribeProjectAnnouncementsRequest**|  | |


### Return type

**DescribeProjectAnnouncements200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 正常返回 |  -  |
|**401** | Invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeProjectByName**
> DescribeOneProject200Response describeProjectByName()

✨ 项目查询(通过项目名称)

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeProjectByNameRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeProjectByNameRequest: DescribeProjectByNameRequest; // (optional)

const { status, data } = await apiInstance.describeProjectByName(
    describeProjectByNameRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeProjectByNameRequest** | **DescribeProjectByNameRequest**|  | |


### Return type

**DescribeOneProject200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeProjectCredentials**
> DescribeProjectCredentials200Response describeProjectCredentials()

✨ 项目凭据列表查询

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeProjectCredentialsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeProjectCredentialsRequest: DescribeProjectCredentialsRequest; // (optional)

const { status, data } = await apiInstance.describeProjectCredentials(
    describeProjectCredentialsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeProjectCredentialsRequest** | **DescribeProjectCredentialsRequest**|  | |


### Return type

**DescribeProjectCredentials200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeProjectDepotBranches**
> DescribeProjectDepotBranches200Response describeProjectDepotBranches()

✨ 获取仓库分支列表

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeProjectDepotBranchesRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeProjectDepotBranchesRequest: DescribeProjectDepotBranchesRequest; // (optional)

const { status, data } = await apiInstance.describeProjectDepotBranches(
    describeProjectDepotBranchesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeProjectDepotBranchesRequest** | **DescribeProjectDepotBranchesRequest**|  | |


### Return type

**DescribeProjectDepotBranches200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeProjectDepotCommits**
> DescribeProjectDepotBranches200Response describeProjectDepotCommits()

✨ 获取分支下的提交列表

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeProjectDepotCommitsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeProjectDepotCommitsRequest: DescribeProjectDepotCommitsRequest; // (optional)

const { status, data } = await apiInstance.describeProjectDepotCommits(
    describeProjectDepotCommitsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeProjectDepotCommitsRequest** | **DescribeProjectDepotCommitsRequest**|  | |


### Return type

**DescribeProjectDepotBranches200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeProjectDepotInfoList**
> DescribeProjectDepotInfoList200Response describeProjectDepotInfoList()

✨ 查询项目下所有的仓库信息列表

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeProjectDepotInfoListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeProjectDepotInfoListRequest: DescribeProjectDepotInfoListRequest; // (optional)

const { status, data } = await apiInstance.describeProjectDepotInfoList(
    describeProjectDepotInfoListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeProjectDepotInfoListRequest** | **DescribeProjectDepotInfoListRequest**|  | |


### Return type

**DescribeProjectDepotInfoList200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeProjectDepotTags**
> DescribeProjectDepotBranches200Response describeProjectDepotTags()

✨ 获取仓库的标签列表

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeProjectDepotBranchesRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeProjectDepotBranchesRequest: DescribeProjectDepotBranchesRequest; // (optional)

const { status, data } = await apiInstance.describeProjectDepotTags(
    describeProjectDepotBranchesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeProjectDepotBranchesRequest** | **DescribeProjectDepotBranchesRequest**|  | |


### Return type

**DescribeProjectDepotBranches200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeProjectDepots**
> DescribeProjectDepots200Response describeProjectDepots()

✨ 获取项目仓库列表

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribePersonalExternalDepotsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describePersonalExternalDepotsRequest: DescribePersonalExternalDepotsRequest; // (optional)

const { status, data } = await apiInstance.describeProjectDepots(
    describePersonalExternalDepotsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describePersonalExternalDepotsRequest** | **DescribePersonalExternalDepotsRequest**|  | |


### Return type

**DescribeProjectDepots200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeProjectIssueFieldList**
> DescribeProjectIssueFieldList200Response describeProjectIssueFieldList()

✨ 查询具体事项类型的属性列表

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeProjectIssueFieldListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeProjectIssueFieldListRequest: DescribeProjectIssueFieldListRequest; // (optional)

const { status, data } = await apiInstance.describeProjectIssueFieldList(
    describeProjectIssueFieldListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeProjectIssueFieldListRequest** | **DescribeProjectIssueFieldListRequest**|  | |


### Return type

**DescribeProjectIssueFieldList200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeProjectIssueStatusList**
> DescribeProjectIssueStatusList200Response describeProjectIssueStatusList()

✨ 查询具体事项类型的状态列表

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeProjectIssueFieldListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeProjectIssueFieldListRequest: DescribeProjectIssueFieldListRequest; // (optional)

const { status, data } = await apiInstance.describeProjectIssueStatusList(
    describeProjectIssueFieldListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeProjectIssueFieldListRequest** | **DescribeProjectIssueFieldListRequest**|  | |


### Return type

**DescribeProjectIssueStatusList200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeProjectIssueTypeList**
> DescribeProjectIssueTypeList200Response describeProjectIssueTypeList()

✨ 查询项目事项类型列表

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeProjectIssueTypeListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeProjectIssueTypeListRequest: DescribeProjectIssueTypeListRequest; // (optional)

const { status, data } = await apiInstance.describeProjectIssueTypeList(
    describeProjectIssueTypeListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeProjectIssueTypeListRequest** | **DescribeProjectIssueTypeListRequest**|  | |


### Return type

**DescribeProjectIssueTypeList200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeProjectLabels**
> DescribeProjectLabels200Response describeProjectLabels()

✨ 项目列表查询-指定项目标签

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeProjectLabelsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeProjectLabelsRequest: DescribeProjectLabelsRequest; // (optional)

const { status, data } = await apiInstance.describeProjectLabels(
    describeProjectLabelsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeProjectLabelsRequest** | **DescribeProjectLabelsRequest**|  | |


### Return type

**DescribeProjectLabels200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeProjectMemberPrincipals**
> DescribeProjectMemberPrincipals200Response describeProjectMemberPrincipals()

✨ 项目成员主体查询(包含用户组、部门、成员)

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeProjectMemberPrincipalsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeProjectMemberPrincipalsRequest: DescribeProjectMemberPrincipalsRequest; // (optional)

const { status, data } = await apiInstance.describeProjectMemberPrincipals(
    describeProjectMemberPrincipalsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeProjectMemberPrincipalsRequest** | **DescribeProjectMemberPrincipalsRequest**|  | |


### Return type

**DescribeProjectMemberPrincipals200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeProjectMembers**
> DescribeProjectMembers200Response describeProjectMembers()

✨ 项目成员列表查询

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeProjectMembersRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeProjectMembersRequest: DescribeProjectMembersRequest; // (optional)

const { status, data } = await apiInstance.describeProjectMembers(
    describeProjectMembersRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeProjectMembersRequest** | **DescribeProjectMembersRequest**|  | |


### Return type

**DescribeProjectMembers200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeProjectMergeRequests**
> DescribeSelfMergeRequests200Response describeProjectMergeRequests()

✨ 获取项目下的合并请求列表

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeProjectMergeRequestsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeProjectMergeRequestsRequest: DescribeProjectMergeRequestsRequest; // (optional)

const { status, data } = await apiInstance.describeProjectMergeRequests(
    describeProjectMergeRequestsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeProjectMergeRequestsRequest** | **DescribeProjectMergeRequestsRequest**|  | |


### Return type

**DescribeSelfMergeRequests200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeProjectRoles**
> DescribeProjectRoles200Response describeProjectRoles()

✨ 项目用户组查询

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeProjectRolesRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeProjectRolesRequest: DescribeProjectRolesRequest; // (optional)

const { status, data } = await apiInstance.describeProjectRoles(
    describeProjectRolesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeProjectRolesRequest** | **DescribeProjectRolesRequest**|  | |


### Return type

**DescribeProjectRoles200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeProjectsByFeature**
> DescribeProjectsByFeature200Response describeProjectsByFeature()

✨ 项目查询（通过一级菜单名查询开启某个模块的项目）

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeProjectsByFeatureRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeProjectsByFeatureRequest: DescribeProjectsByFeatureRequest; // (optional)

const { status, data } = await apiInstance.describeProjectsByFeature(
    describeProjectsByFeatureRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeProjectsByFeatureRequest** | **DescribeProjectsByFeatureRequest**|  | |


### Return type

**DescribeProjectsByFeature200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeProtectedBranch**
> DescribeProtectedBranch200Response describeProtectedBranch()

✨ 查询保护分支详情

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeProtectedBranchRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeProtectedBranchRequest: DescribeProtectedBranchRequest; // (optional)

const { status, data } = await apiInstance.describeProtectedBranch(
    describeProtectedBranchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeProtectedBranchRequest** | **DescribeProtectedBranchRequest**|  | |


### Return type

**DescribeProtectedBranch200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeProtectedBranchMembers**
> DescribeProtectedBranchMembers200Response describeProtectedBranchMembers()

✨ 查询保护分支成员

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeProtectedBranchMembersRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeProtectedBranchMembersRequest: DescribeProtectedBranchMembersRequest; // (optional)

const { status, data } = await apiInstance.describeProtectedBranchMembers(
    describeProtectedBranchMembersRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeProtectedBranchMembersRequest** | **DescribeProtectedBranchMembersRequest**|  | |


### Return type

**DescribeProtectedBranchMembers200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeProtectedBranches**
> DescribeProtectedBranches200Response describeProtectedBranches()

✨ 查询保护分支

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeProtectedBranchesRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeProtectedBranchesRequest: DescribeProtectedBranchesRequest; // (optional)

const { status, data } = await apiInstance.describeProtectedBranches(
    describeProtectedBranchesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeProtectedBranchesRequest** | **DescribeProtectedBranchesRequest**|  | |


### Return type

**DescribeProtectedBranches200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeRelatedCaseList**
> DescribeRelatedCaseList200Response describeRelatedCaseList()

✨ 管理测试用例

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeRelatedCaseListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeRelatedCaseListRequest: DescribeRelatedCaseListRequest; // (optional)

const { status, data } = await apiInstance.describeRelatedCaseList(
    describeRelatedCaseListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeRelatedCaseListRequest** | **DescribeRelatedCaseListRequest**|  | |


### Return type

**DescribeRelatedCaseList200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeRelease**
> ModifyRelease200Response describeRelease()

✨ 版本详情

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeReleaseRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeReleaseRequest: DescribeReleaseRequest; // (optional)

const { status, data } = await apiInstance.describeRelease(
    describeReleaseRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeReleaseRequest** | **DescribeReleaseRequest**|  | |


### Return type

**ModifyRelease200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeReleaseIssueList**
> DescribeReleaseIssueList200Response describeReleaseIssueList()

✨ 版本发布范围

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeReleaseIssueListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeReleaseIssueListRequest: DescribeReleaseIssueListRequest; // (optional)

const { status, data } = await apiInstance.describeReleaseIssueList(
    describeReleaseIssueListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeReleaseIssueListRequest** | **DescribeReleaseIssueListRequest**|  | |


### Return type

**DescribeReleaseIssueList200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeReleaseList**
> DescribeReleaseList200Response describeReleaseList()

✨ 查询项目内版本列表

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeReleaseListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeReleaseListRequest: DescribeReleaseListRequest; // (optional)

const { status, data } = await apiInstance.describeReleaseList(
    describeReleaseListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeReleaseListRequest** | **DescribeReleaseListRequest**|  | |


### Return type

**DescribeReleaseList200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeReport**
> DescribeReport200Response describeReport()

✨ 测试报告详情

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DeleteReportRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let deleteReportRequest: DeleteReportRequest; // (optional)

const { status, data } = await apiInstance.describeReport(
    deleteReportRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteReportRequest** | **DeleteReportRequest**|  | |


### Return type

**DescribeReport200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeReportList**
> DescribeReportList200Response describeReportList()

✨ 测试报告列表

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeReportListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeReportListRequest: DescribeReportListRequest; // (optional)

const { status, data } = await apiInstance.describeReportList(
    describeReportListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeReportListRequest** | **DescribeReportListRequest**|  | |


### Return type

**DescribeReportList200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeRequirementDefectRelation**
> DescribeRequirementDefectRelation200Response describeRequirementDefectRelation()

✨ 查询需求关联缺陷列表

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeRequirementDefectRelationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeRequirementDefectRelationRequest: DescribeRequirementDefectRelationRequest; // (optional)

const { status, data } = await apiInstance.describeRequirementDefectRelation(
    describeRequirementDefectRelationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeRequirementDefectRelationRequest** | **DescribeRequirementDefectRelationRequest**|  | |


### Return type

**DescribeRequirementDefectRelation200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeRequirementTestCaseList**
> DescribeRequirementTestCaseList200Response describeRequirementTestCaseList()

✨ 需求关联的测试用例列表

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeRequirementTestCaseListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeRequirementTestCaseListRequest: DescribeRequirementTestCaseListRequest; // (optional)

const { status, data } = await apiInstance.describeRequirementTestCaseList(
    describeRequirementTestCaseListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeRequirementTestCaseListRequest** | **DescribeRequirementTestCaseListRequest**|  | |


### Return type

**DescribeRequirementTestCaseList200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeResourceReferencesCited**
> DescribeResourceReferencesCited200Response describeResourceReferencesCited()

✨ 被引用资源列表查询

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeResourceReferencesCitingRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeResourceReferencesCitingRequest: DescribeResourceReferencesCitingRequest; // (optional)

const { status, data } = await apiInstance.describeResourceReferencesCited(
    describeResourceReferencesCitingRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeResourceReferencesCitingRequest** | **DescribeResourceReferencesCitingRequest**|  | |


### Return type

**DescribeResourceReferencesCited200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 正常返回 |  -  |
|**401** | Invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeResourceReferencesCiting**
> DescribeResourceReferencesCiting200Response describeResourceReferencesCiting()

✨ 引用资源列表查询

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeResourceReferencesCitingRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeResourceReferencesCitingRequest: DescribeResourceReferencesCitingRequest; // (optional)

const { status, data } = await apiInstance.describeResourceReferencesCiting(
    describeResourceReferencesCitingRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeResourceReferencesCitingRequest** | **DescribeResourceReferencesCitingRequest**|  | |


### Return type

**DescribeResourceReferencesCiting200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 正常返回 |  -  |
|**401** | Invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeResourceScopeListOnPolicy**
> DescribeResourceScopeListOnPolicy200Response describeResourceScopeListOnPolicy()

✨ 权限组可用资源范围分页查询

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeResourceScopeListOnPolicyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeResourceScopeListOnPolicyRequest: DescribeResourceScopeListOnPolicyRequest; // (optional)

const { status, data } = await apiInstance.describeResourceScopeListOnPolicy(
    describeResourceScopeListOnPolicyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeResourceScopeListOnPolicyRequest** | **DescribeResourceScopeListOnPolicyRequest**|  | |


### Return type

**DescribeResourceScopeListOnPolicy200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeSelfMergeRequests**
> DescribeSelfMergeRequests200Response describeSelfMergeRequests()

✨ 获取自己的合并请求列表

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeSelfMergeRequestsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeSelfMergeRequestsRequest: DescribeSelfMergeRequestsRequest; // (optional)

const { status, data } = await apiInstance.describeSelfMergeRequests(
    describeSelfMergeRequestsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeSelfMergeRequestsRequest** | **DescribeSelfMergeRequestsRequest**|  | |


### Return type

**DescribeSelfMergeRequests200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeSingeMergeRequestNotes**
> DescribeSingeMergeRequestNotes200Response describeSingeMergeRequestNotes()

✨ 获取单个合并请求行评论和改动文件diff行评论

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeSingeMergeRequestNotesRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeSingeMergeRequestNotesRequest: DescribeSingeMergeRequestNotesRequest; // (optional)

const { status, data } = await apiInstance.describeSingeMergeRequestNotes(
    describeSingeMergeRequestNotesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeSingeMergeRequestNotesRequest** | **DescribeSingeMergeRequestNotesRequest**|  | |


### Return type

**DescribeSingeMergeRequestNotes200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeSshKey**
> DescribeSshKey200Response describeSshKey()

✨ 获取当前用户所有SSH公钥

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let body: object; // (optional)

const { status, data } = await apiInstance.describeSshKey(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |


### Return type

**DescribeSshKey200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeSubIssueList**
> DescribeSubIssueList200Response describeSubIssueList()

✨ 查询子事项列表

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeSubIssueListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeSubIssueListRequest: DescribeSubIssueListRequest; // (optional)

const { status, data } = await apiInstance.describeSubIssueList(
    describeSubIssueListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeSubIssueListRequest** | **DescribeSubIssueListRequest**|  | |


### Return type

**DescribeSubIssueList200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeTeam**
> DescribeTeam200Response describeTeam()

✨ 团队信息查询

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let body: any; // (optional)

const { status, data } = await apiInstance.describeTeam(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **any**|  | |


### Return type

**DescribeTeam200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 正常返回 |  -  |
|**401** | Invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeTeamAdminMembers**
> DescribeTeamAdminMembers200Response describeTeamAdminMembers()

✨ 查询团队管理员

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeTeamAdminMembersRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeTeamAdminMembersRequest: DescribeTeamAdminMembersRequest; // (optional)

const { status, data } = await apiInstance.describeTeamAdminMembers(
    describeTeamAdminMembersRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeTeamAdminMembersRequest** | **DescribeTeamAdminMembersRequest**|  | |


### Return type

**DescribeTeamAdminMembers200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeTeamArtifacts**
> DescribeTeamArtifacts200Response describeTeamArtifacts()

✨ 制品列表查询

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeTeamArtifactsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeTeamArtifactsRequest: DescribeTeamArtifactsRequest; // (optional)

const { status, data } = await apiInstance.describeTeamArtifacts(
    describeTeamArtifactsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeTeamArtifactsRequest** | **DescribeTeamArtifactsRequest**|  | |


### Return type

**DescribeTeamArtifacts200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeTeamDepotInfoList**
> DescribeTeamDepotInfoList200Response describeTeamDepotInfoList()

✨ 获取团队下仓库列表，仅团队所有者或团队管理员可以调用。

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeTeamDepotInfoListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeTeamDepotInfoListRequest: DescribeTeamDepotInfoListRequest; // (optional)

const { status, data } = await apiInstance.describeTeamDepotInfoList(
    describeTeamDepotInfoListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeTeamDepotInfoListRequest** | **DescribeTeamDepotInfoListRequest**|  | |


### Return type

**DescribeTeamDepotInfoList200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeTeamIssueTypeList**
> DescribeTeamIssueTypeList200Response describeTeamIssueTypeList()

✨ 查询企业事项类型列表

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let body: object; // (optional)

const { status, data } = await apiInstance.describeTeamIssueTypeList(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |


### Return type

**DescribeTeamIssueTypeList200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeTeamIssues**
> DescribeTeamIssues200Response describeTeamIssues()

✨ 查询团队事项列表

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeTeamIssuesRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeTeamIssuesRequest: DescribeTeamIssuesRequest; // (optional)

const { status, data } = await apiInstance.describeTeamIssues(
    describeTeamIssuesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeTeamIssuesRequest** | **DescribeTeamIssuesRequest**|  | |


### Return type

**DescribeTeamIssues200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeTeamMember**
> DescribeTeamMember200Response describeTeamMember()

✨ 通过用户 ID 查询团队成员信息

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeTeamMemberRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeTeamMemberRequest: DescribeTeamMemberRequest; // (optional)

const { status, data } = await apiInstance.describeTeamMember(
    describeTeamMemberRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeTeamMemberRequest** | **DescribeTeamMemberRequest**|  | |


### Return type

**DescribeTeamMember200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeTeamMemberByEmail**
> DescribeTeamMemberByEmail200Response describeTeamMemberByEmail()

✨ 通过用户 Email 查询团队成员信息

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeTeamMemberByEmailRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeTeamMemberByEmailRequest: DescribeTeamMemberByEmailRequest; // (optional)

const { status, data } = await apiInstance.describeTeamMemberByEmail(
    describeTeamMemberByEmailRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeTeamMemberByEmailRequest** | **DescribeTeamMemberByEmailRequest**|  | |


### Return type

**DescribeTeamMemberByEmail200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeTeamMembers**
> DescribeTeamMembers200Response describeTeamMembers()

✨ 团队成员列表查询

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeTeamMembersRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeTeamMembersRequest: DescribeTeamMembersRequest; // (optional)

const { status, data } = await apiInstance.describeTeamMembers(
    describeTeamMembersRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeTeamMembersRequest** | **DescribeTeamMembersRequest**|  | |


### Return type

**DescribeTeamMembers200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeTest**
> DescribeTest200Response describeTest()

✨ 测试任务详情

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeTestRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeTestRequest: DescribeTestRequest; // (optional)

const { status, data } = await apiInstance.describeTest(
    describeTestRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeTestRequest** | **DescribeTestRequest**|  | |


### Return type

**DescribeTest200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeTestCase**
> ModifyTestCase200Response describeTestCase()

✨ 测试用例详情

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DeleteTestCaseRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let deleteTestCaseRequest: DeleteTestCaseRequest; // (optional)

const { status, data } = await apiInstance.describeTestCase(
    deleteTestCaseRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteTestCaseRequest** | **DeleteTestCaseRequest**|  | |


### Return type

**ModifyTestCase200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeTestCaseList**
> DescribeTestCaseList200Response describeTestCaseList()

✨ 测试用例分页数据

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeTestCaseListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeTestCaseListRequest: DescribeTestCaseListRequest; // (optional)

const { status, data } = await apiInstance.describeTestCaseList(
    describeTestCaseListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeTestCaseListRequest** | **DescribeTestCaseListRequest**|  | |


### Return type

**DescribeTestCaseList200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeTestCaseSectionList**
> DescribeTestCaseSectionList200Response describeTestCaseSectionList()

✨ 测试用例分组列表

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeTestCaseSectionListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeTestCaseSectionListRequest: DescribeTestCaseSectionListRequest; // (optional)

const { status, data } = await apiInstance.describeTestCaseSectionList(
    describeTestCaseSectionListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeTestCaseSectionListRequest** | **DescribeTestCaseSectionListRequest**|  | |


### Return type

**DescribeTestCaseSectionList200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeTestDefectList**
> DescribeTestDefectList200Response describeTestDefectList()

✨ 测试任务关联的缺陷列表

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeTestDefectListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeTestDefectListRequest: DescribeTestDefectListRequest; // (optional)

const { status, data } = await apiInstance.describeTestDefectList(
    describeTestDefectListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeTestDefectListRequest** | **DescribeTestDefectListRequest**|  | |


### Return type

**DescribeTestDefectList200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeTestList**
> DescribeTestList200Response describeTestList()

✨ 测试任务列表

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeTestListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeTestListRequest: DescribeTestListRequest; // (optional)

const { status, data } = await apiInstance.describeTestList(
    describeTestListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeTestListRequest** | **DescribeTestListRequest**|  | |


### Return type

**DescribeTestList200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeTestRun**
> DescribeTestRun200Response describeTestRun()

✨ 测试计划详情

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DeleteTestRunRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let deleteTestRunRequest: DeleteTestRunRequest; // (optional)

const { status, data } = await apiInstance.describeTestRun(
    deleteTestRunRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteTestRunRequest** | **DeleteTestRunRequest**|  | |


### Return type

**DescribeTestRun200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeTestRunList**
> DescribeTestRunList200Response describeTestRunList()

✨ 测试计划列表

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeTestRunListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeTestRunListRequest: DescribeTestRunListRequest; // (optional)

const { status, data } = await apiInstance.describeTestRunList(
    describeTestRunListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeTestRunListRequest** | **DescribeTestRunListRequest**|  | |


### Return type

**DescribeTestRunList200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeUserGroups**
> DescribeUserGroups200Response describeUserGroups()

✨ 用户组列表分页查询

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeUserGroupsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeUserGroupsRequest: DescribeUserGroupsRequest; // (optional)

const { status, data } = await apiInstance.describeUserGroups(
    describeUserGroupsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeUserGroupsRequest** | **DescribeUserGroupsRequest**|  | |


### Return type

**DescribeUserGroups200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeUserHandoverIssues**
> DescribeUserHandoverIssues200Response describeUserHandoverIssues()

✨ 查询团队成员待交接事项列表

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeUserHandoverIssuesRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeUserHandoverIssuesRequest: DescribeUserHandoverIssuesRequest; // (optional)

const { status, data } = await apiInstance.describeUserHandoverIssues(
    describeUserHandoverIssuesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeUserHandoverIssuesRequest** | **DescribeUserHandoverIssuesRequest**|  | |


### Return type

**DescribeUserHandoverIssues200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeUserProjects**
> DescribeProjectLabels200Response describeUserProjects()

✨ 项目列表查询（已加入的项目）

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeUserProjectsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeUserProjectsRequest: DescribeUserProjectsRequest; // (optional)

const { status, data } = await apiInstance.describeUserProjects(
    describeUserProjectsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeUserProjectsRequest** | **DescribeUserProjectsRequest**|  | |


### Return type

**DescribeProjectLabels200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeUsersByGroupId**
> DescribeUsersByGroupId200Response describeUsersByGroupId()

✨ 用户列表查询（根据用户组id分页查询）

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeUsersByGroupIdRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeUsersByGroupIdRequest: DescribeUsersByGroupIdRequest; // (optional)

const { status, data } = await apiInstance.describeUsersByGroupId(
    describeUsersByGroupIdRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeUsersByGroupIdRequest** | **DescribeUsersByGroupIdRequest**|  | |


### Return type

**DescribeUsersByGroupId200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeUsersOnResourceAndGrantObject**
> DescribeUsersOnResourceAndGrantObject200Response describeUsersOnResourceAndGrantObject()

✨ 授权用户列表分页查询（指定资源）

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeUsersOnResourceAndGrantObjectRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeUsersOnResourceAndGrantObjectRequest: DescribeUsersOnResourceAndGrantObjectRequest; // (optional)

const { status, data } = await apiInstance.describeUsersOnResourceAndGrantObject(
    describeUsersOnResourceAndGrantObjectRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeUsersOnResourceAndGrantObjectRequest** | **DescribeUsersOnResourceAndGrantObjectRequest**|  | |


### Return type

**DescribeUsersOnResourceAndGrantObject200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeWorkItemSalvage**
> DescribeWorkItemSalvage200Response describeWorkItemSalvage()

✨ 查询 事项分解信息

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeWorkItemSalvageRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeWorkItemSalvageRequest: DescribeWorkItemSalvageRequest; // (optional)

const { status, data } = await apiInstance.describeWorkItemSalvage(
    describeWorkItemSalvageRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeWorkItemSalvageRequest** | **DescribeWorkItemSalvageRequest**|  | |


### Return type

**DescribeWorkItemSalvage200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeWorkbenchIssueList**
> DescribeWorkbenchIssueList200Response describeWorkbenchIssueList()

✨ 获取一个用户在团队内的所有代办事项（即前端页面上个人工作台中的事项列表）

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeWorkbenchIssueListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeWorkbenchIssueListRequest: DescribeWorkbenchIssueListRequest; // (optional)

const { status, data } = await apiInstance.describeWorkbenchIssueList(
    describeWorkbenchIssueListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeWorkbenchIssueListRequest** | **DescribeWorkbenchIssueListRequest**|  | |


### Return type

**DescribeWorkbenchIssueList200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **detachFromResource**
> DeleteCdHostServerGroup200Response detachFromResource()

✨ 授权收回，只收回参数指定的授权，已有其它授权不受影响

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DetachFromResourceRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let detachFromResourceRequest: DetachFromResourceRequest; // (optional)

const { status, data } = await apiInstance.detachFromResource(
    detachFromResourceRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **detachFromResourceRequest** | **DetachFromResourceRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **detachResourceScopeOnPolicy**
> DeleteCdHostServerGroup200Response detachResourceScopeOnPolicy()

✨ 权限组可用资源删除，只删除参数指定的资源，已有的其它资源不受影响

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DetachResourceScopeOnPolicyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let detachResourceScopeOnPolicyRequest: DetachResourceScopeOnPolicyRequest; // (optional)

const { status, data } = await apiInstance.detachResourceScopeOnPolicy(
    detachResourceScopeOnPolicyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **detachResourceScopeOnPolicyRequest** | **DetachResourceScopeOnPolicyRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **forbiddenArtifactVersion**
> DeleteCdHostServerGroup200Response forbiddenArtifactVersion()

✨ 制品版本下载 禁止、解禁

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ForbiddenArtifactVersionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let forbiddenArtifactVersionRequest: ForbiddenArtifactVersionRequest; // (optional)

const { status, data } = await apiInstance.forbiddenArtifactVersion(
    forbiddenArtifactVersionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **forbiddenArtifactVersionRequest** | **ForbiddenArtifactVersionRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **initProjectTemplate**
> DeleteCdHostServerGroup200Response initProjectTemplate()

✨ 初始化项目配置方案

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    InitProjectTemplateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let initProjectTemplateRequest: InitProjectTemplateRequest; // (optional)

const { status, data } = await apiInstance.initProjectTemplate(
    initProjectTemplateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **initProjectTemplateRequest** | **InitProjectTemplateRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 正常返回 |  -  |
|**401** | Invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyArtifactCredit**
> ModifyArtifactCredit200Response modifyArtifactCredit()

✨ 制品授信清单修改

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyArtifactCreditRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyArtifactCreditRequest: ModifyArtifactCreditRequest; // (optional)

const { status, data } = await apiInstance.modifyArtifactCredit(
    modifyArtifactCreditRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyArtifactCreditRequest** | **ModifyArtifactCreditRequest**|  | |


### Return type

**ModifyArtifactCredit200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 正常返回 |  -  |
|**401** | Invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyArtifactProperties**
> DeleteCdHostServerGroup200Response modifyArtifactProperties()

✨ 指定版本制品的制品属性修改

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyArtifactPropertiesRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyArtifactPropertiesRequest: ModifyArtifactPropertiesRequest; // (optional)

const { status, data } = await apiInstance.modifyArtifactProperties(
    modifyArtifactPropertiesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyArtifactPropertiesRequest** | **ModifyArtifactPropertiesRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyBranchProtection**
> ModifyBranchProtection200Response modifyBranchProtection()

✨ 修改保护分支规则相关信息

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyBranchProtectionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyBranchProtectionRequest: ModifyBranchProtectionRequest; // (optional)

const { status, data } = await apiInstance.modifyBranchProtection(
    modifyBranchProtectionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyBranchProtectionRequest** | **ModifyBranchProtectionRequest**|  | |


### Return type

**ModifyBranchProtection200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyBranchProtectionMemberPermission**
> DeleteCdHostServerGroup200Response modifyBranchProtectionMemberPermission()

✨ 更改保护分支管理员权限

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyBranchProtectionMemberPermissionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyBranchProtectionMemberPermissionRequest: ModifyBranchProtectionMemberPermissionRequest; // (optional)

const { status, data } = await apiInstance.modifyBranchProtectionMemberPermission(
    modifyBranchProtectionMemberPermissionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyBranchProtectionMemberPermissionRequest** | **ModifyBranchProtectionMemberPermissionRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyCdCloudAccount**
> ModifyCdCloudAccount200Response modifyCdCloudAccount()

✨ CD 云账号更新

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyCdCloudAccountRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyCdCloudAccountRequest: ModifyCdCloudAccountRequest; // (optional)

const { status, data } = await apiInstance.modifyCdCloudAccount(
    modifyCdCloudAccountRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyCdCloudAccountRequest** | **ModifyCdCloudAccountRequest**|  | |


### Return type

**ModifyCdCloudAccount200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyCdHostServerGroup**
> ModifyCdHostServerGroup200Response modifyCdHostServerGroup()

✨ CD 主机组修改

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyCdHostServerGroupRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyCdHostServerGroupRequest: ModifyCdHostServerGroupRequest; // (optional)

const { status, data } = await apiInstance.modifyCdHostServerGroup(
    modifyCdHostServerGroupRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyCdHostServerGroupRequest** | **ModifyCdHostServerGroupRequest**|  | |


### Return type

**ModifyCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyCdPipeline**
> ModifyCdPipeline200Response modifyCdPipeline()

✨ CD 部署流程修改

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyCdPipelineRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyCdPipelineRequest: ModifyCdPipelineRequest; // (optional)

const { status, data } = await apiInstance.modifyCdPipeline(
    modifyCdPipelineRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyCdPipelineRequest** | **ModifyCdPipelineRequest**|  | |


### Return type

**ModifyCdPipeline200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyChooseDepotSpec**
> ModifyChooseDepotSpec200Response modifyChooseDepotSpec()

✨ 使用、取消使用仓库规范

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyChooseDepotSpecRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyChooseDepotSpecRequest: ModifyChooseDepotSpecRequest; // (optional)

const { status, data } = await apiInstance.modifyChooseDepotSpec(
    modifyChooseDepotSpecRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyChooseDepotSpecRequest** | **ModifyChooseDepotSpecRequest**|  | |


### Return type

**ModifyChooseDepotSpec200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyCloseMR**
> DeleteCdHostServerGroup200Response modifyCloseMR()

✨ 关闭合并请求

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyCloseMRRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyCloseMRRequest: ModifyCloseMRRequest; // (optional)

const { status, data } = await apiInstance.modifyCloseMR(
    modifyCloseMRRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyCloseMRRequest** | **ModifyCloseMRRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyCodingCIAgentEnable**
> DeleteCdHostServerGroup200Response modifyCodingCIAgentEnable()

✨ 自定义构建节点启用、禁用

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyCodingCIAgentEnableRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyCodingCIAgentEnableRequest: ModifyCodingCIAgentEnableRequest; // (optional)

const { status, data } = await apiInstance.modifyCodingCIAgentEnable(
    modifyCodingCIAgentEnableRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyCodingCIAgentEnableRequest** | **ModifyCodingCIAgentEnableRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 正常返回 |  -  |
|**401** | Invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyCodingCIJob**
> DeleteCdHostServerGroup200Response modifyCodingCIJob()

✨ 构建计划修改

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyCodingCIJobRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyCodingCIJobRequest: ModifyCodingCIJobRequest; // (optional)

const { status, data } = await apiInstance.modifyCodingCIJob(
    modifyCodingCIJobRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyCodingCIJobRequest** | **ModifyCodingCIJobRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyDefaultBranch**
> DeleteCdHostServerGroup200Response modifyDefaultBranch()

✨ 修改仓库默认分支

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyDefaultBranchRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyDefaultBranchRequest: ModifyDefaultBranchRequest; // (optional)

const { status, data } = await apiInstance.modifyDefaultBranch(
    modifyDefaultBranchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyDefaultBranchRequest** | **ModifyDefaultBranchRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyDefectRelatedRequirement**
> DeleteCdHostServerGroup200Response modifyDefectRelatedRequirement()

✨ 修改缺陷所属的需求

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyDefectRelatedRequirementRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyDefectRelatedRequirementRequest: ModifyDefectRelatedRequirementRequest; // (optional)

const { status, data } = await apiInstance.modifyDefectRelatedRequirement(
    modifyDefectRelatedRequirementRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyDefectRelatedRequirementRequest** | **ModifyDefectRelatedRequirementRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyDepartment**
> ModifyDepartment200Response modifyDepartment()

✨ 修改部门信息(部门名，移动位置)

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyDepartmentRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyDepartmentRequest: ModifyDepartmentRequest; // (optional)

const { status, data } = await apiInstance.modifyDepartment(
    modifyDepartmentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyDepartmentRequest** | **ModifyDepartmentRequest**|  | |


### Return type

**ModifyDepartment200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 正常返回 |  -  |
|**401** | Invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyDepartmentAssignee**
> DeleteCdHostServerGroup200Response modifyDepartmentAssignee()

✨ 部门负责人管理

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyDepartmentAssigneeRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyDepartmentAssigneeRequest: ModifyDepartmentAssigneeRequest; // (optional)

const { status, data } = await apiInstance.modifyDepartmentAssignee(
    modifyDepartmentAssigneeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyDepartmentAssigneeRequest** | **ModifyDepartmentAssigneeRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 正常返回 |  -  |
|**401** | Invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyDepartmentMember**
> DeleteCdHostServerGroup200Response modifyDepartmentMember()

✨ 部门成员管理

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyDepartmentMemberRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyDepartmentMemberRequest: ModifyDepartmentMemberRequest; // (optional)

const { status, data } = await apiInstance.modifyDepartmentMember(
    modifyDepartmentMemberRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyDepartmentMemberRequest** | **ModifyDepartmentMemberRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 正常返回 |  -  |
|**401** | Invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyDepotDescription**
> DeleteCdHostServerGroup200Response modifyDepotDescription()

✨ 修改仓库描述

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyDepotDescriptionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyDepotDescriptionRequest: ModifyDepotDescriptionRequest; // (optional)

const { status, data } = await apiInstance.modifyDepotDescription(
    modifyDepotDescriptionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyDepotDescriptionRequest** | **ModifyDepotDescriptionRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyDepotFilePushRule**
> ModifyDepotFilePushRule200Response modifyDepotFilePushRule()

✨ 修改 git 仓库文件推送规则

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyDepotFilePushRuleRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyDepotFilePushRuleRequest: ModifyDepotFilePushRuleRequest; // (optional)

const { status, data } = await apiInstance.modifyDepotFilePushRule(
    modifyDepotFilePushRuleRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyDepotFilePushRuleRequest** | **ModifyDepotFilePushRuleRequest**|  | |


### Return type

**ModifyDepotFilePushRule200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyDepotFilePushRuleDenyPrivilege**
> ModifyDepotFilePushRuleDenyPrivilege200Response modifyDepotFilePushRuleDenyPrivilege()

✨ 修改 git 仓库特权者文件推送权限

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyDepotFilePushRuleDenyPrivilegeRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyDepotFilePushRuleDenyPrivilegeRequest: ModifyDepotFilePushRuleDenyPrivilegeRequest; // (optional)

const { status, data } = await apiInstance.modifyDepotFilePushRuleDenyPrivilege(
    modifyDepotFilePushRuleDenyPrivilegeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyDepotFilePushRuleDenyPrivilegeRequest** | **ModifyDepotFilePushRuleDenyPrivilegeRequest**|  | |


### Return type

**ModifyDepotFilePushRuleDenyPrivilege200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyDepotLevelDepotSpec**
> ModifyDepotLevelDepotSpec200Response modifyDepotLevelDepotSpec()

✨ 修改、新增仓库级别的仓库规范

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyDepotLevelDepotSpecRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyDepotLevelDepotSpecRequest: ModifyDepotLevelDepotSpecRequest; // (optional)

const { status, data } = await apiInstance.modifyDepotLevelDepotSpec(
    modifyDepotLevelDepotSpecRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyDepotLevelDepotSpecRequest** | **ModifyDepotLevelDepotSpecRequest**|  | |


### Return type

**ModifyDepotLevelDepotSpec200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyDepotName**
> ModifyDepotName200Response modifyDepotName()

✨ 修改仓库名称

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyDepotNameRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyDepotNameRequest: ModifyDepotNameRequest; // (optional)

const { status, data } = await apiInstance.modifyDepotName(
    modifyDepotNameRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyDepotNameRequest** | **ModifyDepotNameRequest**|  | |


### Return type

**ModifyDepotName200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyDepotPushSetting**
> ModifyDepotPushSetting200Response modifyDepotPushSetting()

✨ 修改仓库推送设置

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyDepotPushSettingRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyDepotPushSettingRequest: ModifyDepotPushSettingRequest; // (optional)

const { status, data } = await apiInstance.modifyDepotPushSetting(
    modifyDepotPushSettingRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyDepotPushSettingRequest** | **ModifyDepotPushSettingRequest**|  | |


### Return type

**ModifyDepotPushSetting200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyDepotQuota**
> DeleteCdHostServerGroup200Response modifyDepotQuota()

✨ 修改仓库容量

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyDepotQuotaRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyDepotQuotaRequest: ModifyDepotQuotaRequest; // (optional)

const { status, data } = await apiInstance.modifyDepotQuota(
    modifyDepotQuotaRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyDepotQuotaRequest** | **ModifyDepotQuotaRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyDepotSettings**
> DeleteCdHostServerGroup200Response modifyDepotSettings()

✨ 修改仓库设置

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyDepotSettingsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyDepotSettingsRequest: ModifyDepotSettingsRequest; // (optional)

const { status, data } = await apiInstance.modifyDepotSettings(
    modifyDepotSettingsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyDepotSettingsRequest** | **ModifyDepotSettingsRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyDepotSharedSetting**
> DeleteCdHostServerGroup200Response modifyDepotSharedSetting()

✨ 修改仓库是否开源设置

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyDepotSharedSettingRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyDepotSharedSettingRequest: ModifyDepotSharedSettingRequest; // (optional)

const { status, data } = await apiInstance.modifyDepotSharedSetting(
    modifyDepotSharedSettingRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyDepotSharedSettingRequest** | **ModifyDepotSharedSettingRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyGitCherryPick**
> DeleteCdHostServerGroup200Response modifyGitCherryPick()

✨ 将某次提交cherry-pick到指定分支

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyGitCherryPickRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyGitCherryPickRequest: ModifyGitCherryPickRequest; // (optional)

const { status, data } = await apiInstance.modifyGitCherryPick(
    modifyGitCherryPickRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyGitCherryPickRequest** | **ModifyGitCherryPickRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyGitCommitRevert**
> DeleteCdHostServerGroup200Response modifyGitCommitRevert()

✨ 还原某次提交

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyGitCommitRevertRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyGitCommitRevertRequest: ModifyGitCommitRevertRequest; // (optional)

const { status, data } = await apiInstance.modifyGitCommitRevert(
    modifyGitCommitRevertRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyGitCommitRevertRequest** | **ModifyGitCommitRevertRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyGitCommitStatus**
> DeleteCdHostServerGroup200Response modifyGitCommitStatus()

✨ 修改提交对应的流水线状态

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyGitCommitStatusRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyGitCommitStatusRequest: ModifyGitCommitStatusRequest; // (optional)

const { status, data } = await apiInstance.modifyGitCommitStatus(
    modifyGitCommitStatusRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyGitCommitStatusRequest** | **ModifyGitCommitStatusRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyGitDepotArchive**
> DeleteCdHostServerGroup200Response modifyGitDepotArchive()

✨ 仓库归档

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyGitDepotArchiveRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyGitDepotArchiveRequest: ModifyGitDepotArchiveRequest; // (optional)

const { status, data } = await apiInstance.modifyGitDepotArchive(
    modifyGitDepotArchiveRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyGitDepotArchiveRequest** | **ModifyGitDepotArchiveRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyGitDepotUnarchive**
> DeleteCdHostServerGroup200Response modifyGitDepotUnarchive()

✨ 仓库解除归档

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyGitDepotUnarchiveRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyGitDepotUnarchiveRequest: ModifyGitDepotUnarchiveRequest; // (optional)

const { status, data } = await apiInstance.modifyGitDepotUnarchive(
    modifyGitDepotUnarchiveRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyGitDepotUnarchiveRequest** | **ModifyGitDepotUnarchiveRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyGitFiles**
> ModifyGitFiles200Response modifyGitFiles()

✨ 修改仓库某文件

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyGitFilesRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyGitFilesRequest: ModifyGitFilesRequest; // (optional)

const { status, data } = await apiInstance.modifyGitFiles(
    modifyGitFilesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyGitFilesRequest** | **ModifyGitFilesRequest**|  | |


### Return type

**ModifyGitFiles200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyGitMergeBranch**
> ModifyGitMergeBranch200Response modifyGitMergeBranch()

✨ 将源分支的改动合并到目标分支

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyGitMergeBranchRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyGitMergeBranchRequest: ModifyGitMergeBranchRequest; // (optional)

const { status, data } = await apiInstance.modifyGitMergeBranch(
    modifyGitMergeBranchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyGitMergeBranchRequest** | **ModifyGitMergeBranchRequest**|  | |


### Return type

**ModifyGitMergeBranch200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyGitMergeRequest**
> ModifyGitMergeRequest200Response modifyGitMergeRequest()

✨ 修改合并请求的标题和描述信息

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyGitMergeRequestRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyGitMergeRequestRequest: ModifyGitMergeRequestRequest; // (optional)

const { status, data } = await apiInstance.modifyGitMergeRequest(
    modifyGitMergeRequestRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyGitMergeRequestRequest** | **ModifyGitMergeRequestRequest**|  | |


### Return type

**ModifyGitMergeRequest200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyGitMergeRequestRebase**
> DeleteCdHostServerGroup200Response modifyGitMergeRequestRebase()

✨ 合并请求中的源分支进行rebase操作

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyGitMergeRequestRebaseRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyGitMergeRequestRebaseRequest: ModifyGitMergeRequestRebaseRequest; // (optional)

const { status, data } = await apiInstance.modifyGitMergeRequestRebase(
    modifyGitMergeRequestRebaseRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyGitMergeRequestRebaseRequest** | **ModifyGitMergeRequestRebaseRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyGitRebase**
> DeleteCdHostServerGroup200Response modifyGitRebase()

✨ git变基操作

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyGitRebaseRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyGitRebaseRequest: ModifyGitRebaseRequest; // (optional)

const { status, data } = await apiInstance.modifyGitRebase(
    modifyGitRebaseRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyGitRebaseRequest** | **ModifyGitRebaseRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyGitRelease**
> DeleteCdHostServerGroup200Response modifyGitRelease()

✨ 修改仓库版本信息

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyGitReleaseRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyGitReleaseRequest: ModifyGitReleaseRequest; // (optional)

const { status, data } = await apiInstance.modifyGitRelease(
    modifyGitReleaseRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyGitReleaseRequest** | **ModifyGitReleaseRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyGitTransfer**
> ModifyGitTransfer200Response modifyGitTransfer()

✨ 仓库转移至同团队下的其他项目中

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyGitTransferRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyGitTransferRequest: ModifyGitTransferRequest; // (optional)

const { status, data } = await apiInstance.modifyGitTransfer(
    modifyGitTransferRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyGitTransferRequest** | **ModifyGitTransferRequest**|  | |


### Return type

**ModifyGitTransfer200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyIssue**
> ModifyIssue200Response modifyIssue()

✨ 修改事项

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyIssueRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyIssueRequest: ModifyIssueRequest; // (optional)

const { status, data } = await apiInstance.modifyIssue(
    modifyIssueRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyIssueRequest** | **ModifyIssueRequest**|  | |


### Return type

**ModifyIssue200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyIssueComment**
> DeleteCdHostServerGroup200Response modifyIssueComment()

✨ 修改事项评论

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyIssueCommentRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyIssueCommentRequest: ModifyIssueCommentRequest; // (optional)

const { status, data } = await apiInstance.modifyIssueComment(
    modifyIssueCommentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyIssueCommentRequest** | **ModifyIssueCommentRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyIssueDescription**
> DeleteCdHostServerGroup200Response modifyIssueDescription()

✨ 修改事项描述

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyIssueDescriptionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyIssueDescriptionRequest: ModifyIssueDescriptionRequest; // (optional)

const { status, data } = await apiInstance.modifyIssueDescription(
    modifyIssueDescriptionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyIssueDescriptionRequest** | **ModifyIssueDescriptionRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyIssueParentRequirement**
> DeleteCdHostServerGroup200Response modifyIssueParentRequirement()

✨ 修改事项父需求

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyIssueParentRequirementRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyIssueParentRequirementRequest: ModifyIssueParentRequirementRequest; // (optional)

const { status, data } = await apiInstance.modifyIssueParentRequirement(
    modifyIssueParentRequirementRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyIssueParentRequirementRequest** | **ModifyIssueParentRequirementRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyIteration**
> ModifyIteration200Response modifyIteration()

✨ 修改迭代

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyIterationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyIterationRequest: ModifyIterationRequest; // (optional)

const { status, data } = await apiInstance.modifyIteration(
    modifyIterationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyIterationRequest** | **ModifyIterationRequest**|  | |


### Return type

**ModifyIteration200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyIterationStatus**
> ModifyIterationStatus200Response modifyIterationStatus()

✨ 修改迭代状态

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyIterationStatusRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyIterationStatusRequest: ModifyIterationStatusRequest; // (optional)

const { status, data } = await apiInstance.modifyIterationStatus(
    modifyIterationStatusRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyIterationStatusRequest** | **ModifyIterationStatusRequest**|  | |


### Return type

**ModifyIterationStatus200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyMergeMR**
> ModifyMergeMR200Response modifyMergeMR()

✨ 执行合并

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyMergeMRRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyMergeMRRequest: ModifyMergeMRRequest; // (optional)

const { status, data } = await apiInstance.modifyMergeMR(
    modifyMergeMRRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyMergeMRRequest** | **ModifyMergeMRRequest**|  | |


### Return type

**ModifyMergeMR200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyMergeRequestBasicSettings**
> DeleteCdHostServerGroup200Response modifyMergeRequestBasicSettings()

✨ 修改合并请求基础设置

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyMergeRequestBasicSettingsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyMergeRequestBasicSettingsRequest: ModifyMergeRequestBasicSettingsRequest; // (optional)

const { status, data } = await apiInstance.modifyMergeRequestBasicSettings(
    modifyMergeRequestBasicSettingsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyMergeRequestBasicSettingsRequest** | **ModifyMergeRequestBasicSettingsRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyMergeRequestMergeCommitMessageTemplate**
> DeleteCdHostServerGroup200Response modifyMergeRequestMergeCommitMessageTemplate()

✨ 修改合并请求合并提交消息模版

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyMergeRequestSquashCommitMessageTemplateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyMergeRequestSquashCommitMessageTemplateRequest: ModifyMergeRequestSquashCommitMessageTemplateRequest; // (optional)

const { status, data } = await apiInstance.modifyMergeRequestMergeCommitMessageTemplate(
    modifyMergeRequestSquashCommitMessageTemplateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyMergeRequestSquashCommitMessageTemplateRequest** | **ModifyMergeRequestSquashCommitMessageTemplateRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyMergeRequestSquashCommitMessageTemplate**
> DeleteCdHostServerGroup200Response modifyMergeRequestSquashCommitMessageTemplate()

✨ 修改合并请求合并压缩提交消息模版

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyMergeRequestSquashCommitMessageTemplateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyMergeRequestSquashCommitMessageTemplateRequest: ModifyMergeRequestSquashCommitMessageTemplateRequest; // (optional)

const { status, data } = await apiInstance.modifyMergeRequestSquashCommitMessageTemplate(
    modifyMergeRequestSquashCommitMessageTemplateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyMergeRequestSquashCommitMessageTemplateRequest** | **ModifyMergeRequestSquashCommitMessageTemplateRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyPolicy**
> ModifyPolicy200Response modifyPolicy()

✨ 权限组修改

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyPolicyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyPolicyRequest: ModifyPolicyRequest; // (optional)

const { status, data } = await apiInstance.modifyPolicy(
    modifyPolicyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyPolicyRequest** | **ModifyPolicyRequest**|  | |


### Return type

**ModifyPolicy200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyProject**
> DeleteCdHostServerGroup200Response modifyProject()

✨ 项目信息修改

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyProjectRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyProjectRequest: ModifyProjectRequest; // (optional)

const { status, data } = await apiInstance.modifyProject(
    modifyProjectRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyProjectRequest** | **ModifyProjectRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyProjectAnnouncement**
> ModifyProjectAnnouncement200Response modifyProjectAnnouncement()

✨ 项目公告更新

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyProjectAnnouncementRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyProjectAnnouncementRequest: ModifyProjectAnnouncementRequest; // (optional)

const { status, data } = await apiInstance.modifyProjectAnnouncement(
    modifyProjectAnnouncementRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyProjectAnnouncementRequest** | **ModifyProjectAnnouncementRequest**|  | |


### Return type

**ModifyProjectAnnouncement200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 正常返回 |  -  |
|**401** | Invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyProjectLabel**
> ModifyProjectLabel200Response modifyProjectLabel()

✨ 项目标签修改

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyProjectLabelRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyProjectLabelRequest: ModifyProjectLabelRequest; // (optional)

const { status, data } = await apiInstance.modifyProjectLabel(
    modifyProjectLabelRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyProjectLabelRequest** | **ModifyProjectLabelRequest**|  | |


### Return type

**ModifyProjectLabel200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 正常返回 |  -  |
|**401** | Invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyRelease**
> ModifyRelease200Response modifyRelease()

✨ 修改版本

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyReleaseRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyReleaseRequest: ModifyReleaseRequest; // (optional)

const { status, data } = await apiInstance.modifyRelease(
    modifyReleaseRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyReleaseRequest** | **ModifyReleaseRequest**|  | |


### Return type

**ModifyRelease200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyTeamLevelDepotSpec**
> ModifyTeamLevelDepotSpec200Response modifyTeamLevelDepotSpec()

✨ 修改、新增团队级别的仓库规范

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyTeamLevelDepotSpecRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyTeamLevelDepotSpecRequest: ModifyTeamLevelDepotSpecRequest; // (optional)

const { status, data } = await apiInstance.modifyTeamLevelDepotSpec(
    modifyTeamLevelDepotSpecRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyTeamLevelDepotSpecRequest** | **ModifyTeamLevelDepotSpecRequest**|  | |


### Return type

**ModifyTeamLevelDepotSpec200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyTeamMemberLocked**
> DeleteCdHostServerGroup200Response modifyTeamMemberLocked()

✨ 通过用户 ID 团队成员锁定

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyTeamMemberUnlockedRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyTeamMemberUnlockedRequest: ModifyTeamMemberUnlockedRequest; // (optional)

const { status, data } = await apiInstance.modifyTeamMemberLocked(
    modifyTeamMemberUnlockedRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyTeamMemberUnlockedRequest** | **ModifyTeamMemberUnlockedRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyTeamMemberUnlocked**
> DeleteCdHostServerGroup200Response modifyTeamMemberUnlocked()

✨ 通过用户 ID 解锁团队成员

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyTeamMemberUnlockedRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyTeamMemberUnlockedRequest: ModifyTeamMemberUnlockedRequest; // (optional)

const { status, data } = await apiInstance.modifyTeamMemberUnlocked(
    modifyTeamMemberUnlockedRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyTeamMemberUnlockedRequest** | **ModifyTeamMemberUnlockedRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyTestCase**
> ModifyTestCase200Response modifyTestCase()

✨ 测试用例修改

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyTestCaseRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyTestCaseRequest: ModifyTestCaseRequest; // (optional)

const { status, data } = await apiInstance.modifyTestCase(
    modifyTestCaseRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyTestCaseRequest** | **ModifyTestCaseRequest**|  | |


### Return type

**ModifyTestCase200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyTestCaseSection**
> ModifyTestCaseSection200Response modifyTestCaseSection()

✨ 测试用例分组修改

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyTestCaseSectionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyTestCaseSectionRequest: ModifyTestCaseSectionRequest; // (optional)

const { status, data } = await apiInstance.modifyTestCaseSection(
    modifyTestCaseSectionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyTestCaseSectionRequest** | **ModifyTestCaseSectionRequest**|  | |


### Return type

**ModifyTestCaseSection200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyTestRun**
> ModifyTestRun200Response modifyTestRun()

✨ 测试计划修改

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyTestRunRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyTestRunRequest: ModifyTestRunRequest; // (optional)

const { status, data } = await apiInstance.modifyTestRun(
    modifyTestRunRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyTestRunRequest** | **ModifyTestRunRequest**|  | |


### Return type

**ModifyTestRun200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyWorkItemSplitIssues**
> DeleteCdHostServerGroup200Response modifyWorkItemSplitIssues()

✨ 项目集工作项分解/取消分解到项目中的事项

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifyWorkItemSplitIssuesRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let modifyWorkItemSplitIssuesRequest: ModifyWorkItemSplitIssuesRequest; // (optional)

const { status, data } = await apiInstance.modifyWorkItemSplitIssues(
    modifyWorkItemSplitIssuesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyWorkItemSplitIssuesRequest** | **ModifyWorkItemSplitIssuesRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **planIterationIssue**
> DeleteCdHostServerGroup200Response planIterationIssue()

✨ 批量规划迭代

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    PlanIterationIssueRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let planIterationIssueRequest: PlanIterationIssueRequest; // (optional)

const { status, data } = await apiInstance.planIterationIssue(
    planIterationIssueRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **planIterationIssueRequest** | **PlanIterationIssueRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **releaseArtifactVersion**
> DeleteCdHostServerGroup200Response releaseArtifactVersion()

✨ 将指定版本的制品的发布状态调整为已发布

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeArtifactChecksumsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeArtifactChecksumsRequest: DescribeArtifactChecksumsRequest; // (optional)

const { status, data } = await apiInstance.releaseArtifactVersion(
    describeArtifactChecksumsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeArtifactChecksumsRequest** | **DescribeArtifactChecksumsRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reorderCdPipelines**
> ReorderCdPipelines200Response reorderCdPipelines()

✨ 部署流程重排序

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ReorderCdPipelinesRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let reorderCdPipelinesRequest: ReorderCdPipelinesRequest; // (optional)

const { status, data } = await apiInstance.reorderCdPipelines(
    reorderCdPipelinesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reorderCdPipelinesRequest** | **ReorderCdPipelinesRequest**|  | |


### Return type

**ReorderCdPipelines200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setGrantToResource**
> DeleteCdHostServerGroup200Response setGrantToResource()

✨ 授权设置，收回授权体在资源中的所有授权，重新设置为参数指定的授权

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    SetGrantToResourceRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let setGrantToResourceRequest: SetGrantToResourceRequest; // (optional)

const { status, data } = await apiInstance.setGrantToResource(
    setGrantToResourceRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **setGrantToResourceRequest** | **SetGrantToResourceRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setPredicatePolicyOnResource**
> DeleteCdHostServerGroup200Response setPredicatePolicyOnResource()

✨ 资源权限判定策略设置

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    SetPredicatePolicyOnResourceRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let setPredicatePolicyOnResourceRequest: SetPredicatePolicyOnResourceRequest; // (optional)

const { status, data } = await apiInstance.setPredicatePolicyOnResource(
    setPredicatePolicyOnResourceRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **setPredicatePolicyOnResourceRequest** | **SetPredicatePolicyOnResourceRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stopCodingCIBuild**
> DeleteCdHostServerGroup200Response stopCodingCIBuild()

✨ 构建停止

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DescribeCodingCIBuildStageRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let describeCodingCIBuildStageRequest: DescribeCodingCIBuildStageRequest; // (optional)

const { status, data } = await apiInstance.stopCodingCIBuild(
    describeCodingCIBuildStageRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeCodingCIBuildStageRequest** | **DescribeCodingCIBuildStageRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **triggerCdPipeline**
> TriggerCdPipeline200Response triggerCdPipeline()

✨ 部署流程触发

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    TriggerCdPipelineRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let triggerCdPipelineRequest: TriggerCdPipelineRequest; // (optional)

const { status, data } = await apiInstance.triggerCdPipeline(
    triggerCdPipelineRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **triggerCdPipelineRequest** | **TriggerCdPipelineRequest**|  | |


### Return type

**TriggerCdPipeline200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **triggerCodingCIBuild**
> TriggerCodingCIBuild200Response triggerCodingCIBuild()

✨ 构建触发

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    TriggerCodingCIBuildRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let triggerCodingCIBuildRequest: TriggerCodingCIBuildRequest; // (optional)

const { status, data } = await apiInstance.triggerCodingCIBuild(
    triggerCodingCIBuildRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **triggerCodingCIBuildRequest** | **TriggerCodingCIBuildRequest**|  | |


### Return type

**TriggerCodingCIBuild200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateUserGroupById**
> DeleteCdHostServerGroup200Response updateUserGroupById()

✨ 用户组更新

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UpdateUserGroupByIdRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let updateUserGroupByIdRequest: UpdateUserGroupByIdRequest; // (optional)

const { status, data } = await apiInstance.updateUserGroupById(
    updateUserGroupByIdRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateUserGroupByIdRequest** | **UpdateUserGroupByIdRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

